import { FC, useEffect, useRef } from 'react';
import { clampScope, inScope } from '@anton.bobrov/vevet-init';
import { IProps } from './types';

export const Label: FC<IProps> = ({
  className,
  style,
  text,
  index,
  length,
  onProgressMove,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(
    () =>
      onProgressMove((progressMove) => {
        if (!ref.current) {
          return;
        }

        const step = 1 / (length - 1);
        const scopeIn = [-step + index * step, index * step];
        const scopeOut = [scopeIn[0] + step, scopeIn[1] + step];

        let progress = 0;

        if (inScope(progressMove, scopeIn)) {
          progress = clampScope(progressMove, scopeIn);
        } else {
          progress = 1.0 - clampScope(progressMove, scopeOut);
        }

        ref.current.style.opacity = `${progress}`;
      }),
    [index, length, onProgressMove],
  );

  return (
    <p ref={ref} className={className} style={style}>
      {text}
    </p>
  );
};
