import { FC, memo, useRef, useState } from 'react';
import { TagName } from '@anton.bobrov/nextjs-sp-helpers';
import { RichText } from '@/components/Typography/RichText';
import cn from 'classnames';
import { useStoreLexicon } from '@/store/reducers/page';
import { IProps } from './types';
import styles from './styles.module.scss';
import { useAnimation } from './utils/useAnimation';

const Component: FC<IProps> = ({
  title,
  titleSize = 'medium',
  description,
  isActive,
  index,
  ...props
}) => {
  const ref = useRef<HTMLElement>(null);

  const { navigation: lexicon } = useStoreLexicon();

  const [isDefaultActive] = useState(isActive);

  useAnimation({ isActive, ref, ...props });

  const hasDescription = Boolean(description);

  return (
    <section
      ref={ref}
      className={cn(
        styles.main_content,
        hasDescription && styles.has_description,
        isDefaultActive && styles.default_active,
        isActive && styles.active,
      )}
      role="group"
      aria-roledescription="slide"
      aria-label={`${lexicon.slideNumber + (index + 1)}`}
      aria-hidden={!isActive}
    >
      {title && (
        <TagName
          className={cn(styles.title, styles[`size_${titleSize}`])}
          tagName={index === 0 ? 'h1' : 'h2'}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {description && (
        <RichText className={styles.description} html={description} />
      )}
    </section>
  );
};

Component.displayName = 'MainContent';

export const MainContent = memo(Component);
