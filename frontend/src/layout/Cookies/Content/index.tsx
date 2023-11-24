import { forwardRef } from 'react';
import cn from 'classnames';
import { useStoreGlobal, useStoreLexicon } from '@/store/reducers/page';
import { FillButton } from '@/components/Button/Fill';
import styles from './styles.module.scss';
import { IProps } from './types';

export const Content = forwardRef<HTMLDivElement, IProps>(
  ({ onAccept, className, style }, ref) => {
    const { cookies: lexicon } = useStoreLexicon();
    const { links } = useStoreGlobal();

    const description = lexicon.description.replace(
      '{{privacyPolicyHref}}',
      links.privacyPolicy,
    );

    return (
      <div ref={ref} className={cn(styles.content, className)} style={style}>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div>
          <FillButton
            className={styles.button}
            tag="button"
            type="button"
            theme="dark"
            onClick={onAccept}
            text={lexicon.accept}
          />
        </div>
      </div>
    );
  },
);

Content.displayName = 'Content';
