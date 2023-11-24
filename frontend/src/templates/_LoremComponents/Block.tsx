import { FC, PropsWithChildren, useState } from 'react';
import { Heading } from '@/components/Typography/Heading';
import { IBlockProps } from './types';

export const Block: FC<PropsWithChildren<IBlockProps>> = ({
  title,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section style={{ margin: '40px 0' }}>
      <Heading
        variant={4}
        onClick={() => setIsVisible((val) => !val)}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        {title} {isVisible ? '-' : '+'}
      </Heading>

      {isVisible && (
        <>
          <hr />
          {children}
          <hr />
        </>
      )}
    </section>
  );
};
