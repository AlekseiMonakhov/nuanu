import { FC, memo } from 'react';
import cn from 'classnames';
import { registerComponent } from 'rc-api-registry';
import { ScrollView } from '@anton.bobrov/react-components';
import { RichText } from '@/components/Typography/RichText';
import { Heading } from '@/components/Typography/Heading';
import { IHomeIntro, IProps } from './types';
import styles from './styles.module.scss';

const Component: FC<IProps> = ({ className, style, title, description }) => (
  <section className={cn(className, styles.home_intro)} style={style}>
    <ScrollView.Element animation="fadeInUp">
      <Heading variant={1} dangerouslySetInnerHTML={{ __html: title }} />
    </ScrollView.Element>

    <ScrollView.Element animation="fadeInUp">
      <RichText className={styles.description} html={description} />
    </ScrollView.Element>
  </section>
);

const MemoComponent = memo(Component);

export const HomeIntro = registerComponent<IHomeIntro>()(
  MemoComponent,
  'HomeIntro',
);
