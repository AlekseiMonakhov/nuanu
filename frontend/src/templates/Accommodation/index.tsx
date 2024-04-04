import { FC } from 'react';
import { useTemplate } from '../_hooks/useTemplate';
import { IAccommodation } from './types';
import { ComingSoonWrapper } from '../components/ComingSoonWrapper';
import styles from './styles.module.scss';

const Accommodation: FC<IAccommodation> = () => {
  useTemplate();

  return (
    <ComingSoonWrapper
      className={styles.template}
      text="The 'Accommodation' page is coming soon."
      items={[
        {
          key: 0,
          original: '/lorem/accommodation/0.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 1,
          original: '/lorem/accommodation/1.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 2,
          original: '/lorem/accommodation/2.jpg',
          width: 473,
          height: 450,
        },
        {
          key: 3,
          original: '/lorem/accommodation/3.jpg',
          width: 716,
          height: 450,
        },
      ]}
    />
  );
};

export default Accommodation;
