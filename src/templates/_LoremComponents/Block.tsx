import { FC, PropsWithChildren, useState } from 'react';
import { ScrollView } from '@anton.bobrov/react-components';
import { Heading } from '@/components/Typography/Heading';
import { IBlockProps } from './types';

export const Block: FC<PropsWithChildren<IBlockProps>> = ({
  title,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section style={{ margin: '40px 0' }}>
      <ScrollView.Element animation="fadeInUp">
        <Heading
          variant={4}
          onClick={() => setIsVisible((val) => !val)}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {title} {isVisible ? '-' : '+'}
        </Heading>
      </ScrollView.Element>

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
