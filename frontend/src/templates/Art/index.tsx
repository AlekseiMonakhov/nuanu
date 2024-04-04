import { FC } from 'react';
import { useTemplate } from '../_hooks/useTemplate';
import { IArt } from './types';
import { ComingSoonWrapper } from '../components/ComingSoonWrapper';
import styles from './styles.module.scss';

const Art: FC<IArt> = () => {
  useTemplate();

  return (
    <ComingSoonWrapper
      className={styles.template}
      text="The 'Art' page is coming soon."
      items={[
        {
          key: 0,
          original: '/lorem/art/0.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 1,
          original: '/lorem/art/1.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 2,
          original: '/lorem/art/2.jpg',
          width: 473,
          height: 450,
        },
        {
          key: 3,
          original: '/lorem/art/3.jpg',
          width: 390,
          height: 450,
        },
        {
          key: 4,
          original: '/lorem/art/4.jpg',
          width: 390,
          height: 450,
        },
      ]}
    />
  );
};

export default Art;
