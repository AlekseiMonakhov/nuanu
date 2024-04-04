import { FC } from 'react';
import { useTemplate } from '../_hooks/useTemplate';
import { IExperience } from './types';
import { ComingSoonWrapper } from '../components/ComingSoonWrapper';
import styles from './styles.module.scss';

const Experience: FC<IExperience> = () => {
  useTemplate();

  return (
    <ComingSoonWrapper
      className={styles.template}
      text="The 'Experience' page is coming soon."
      items={[
        {
          key: 0,
          original: '/lorem/experience/0.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 1,
          original: '/lorem/experience/1.jpg',
          width: 716,
          height: 450,
        },
        {
          key: 2,
          original: '/lorem/experience/2.jpg',
          width: 473,
          height: 450,
        },
        {
          key: 3,
          original: '/lorem/experience/3.jpg',
          width: 716,
          height: 450,
        },
      ]}
    />
  );
};

export default Experience;
