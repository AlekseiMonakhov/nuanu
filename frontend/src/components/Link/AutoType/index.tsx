import { FC, memo } from 'react';
import Link from 'next/link';
import emailValidator from 'email-validator';
import { IProps } from './types';

const Component: FC<IProps> = ({ className, style, text, href, target }) => {
  if (emailValidator.validate(href)) {
    return (
      <Link className={className} style={style} href={`mailto:${href}`}>
        {text}
      </Link>
    );
  }

  return (
    <Link
      className={className}
      style={style}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {text}
    </Link>
  );
};

Component.displayName = 'AutoTypeLink';

export const AutoTypeLink = memo(Component);
