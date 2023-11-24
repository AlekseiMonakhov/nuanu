import { FC } from 'react';
import { useBreakpointName } from '@anton.bobrov/react-vevet-hooks';
import { IProps } from './types';
import { LandscapeLayout } from './LandscapeLayout';
import { PortraitLayout } from './PortraitLayout';

export const HomeParagraphsItem: FC<IProps> = ({
  className,
  style,
  index,
  ...props
}) => {
  const breakpoint = useBreakpointName();

  if (breakpoint === 'phone') {
    return (
      <PortraitLayout
        {...props}
        className={className}
        style={style}
        index={index}
      />
    );
  }

  return (
    <LandscapeLayout
      {...props}
      className={className}
      style={style}
      index={index}
      isLarge={index === 1}
      isReverse={index % 2 !== 0}
    />
  );
};
