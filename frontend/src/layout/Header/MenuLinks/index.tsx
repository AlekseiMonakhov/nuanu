import { FC } from 'react';
import {
  useStoreGlobal,
  useStoreLexicon,
  useStorePage,
} from '@/store/reducers/page';
import { IProps } from './types';
import { Link } from './Link';

export const HeaderMenuLinks: FC<IProps> = ({
  className,
  style,
  hasTooltips,
}) => {
  const { menu } = useStoreGlobal();
  const { templateName } = useStorePage();

  const { menu: lexicon } = useStoreLexicon();

  const hasActiveStyles = templateName !== 'Home';

  return (
    <ul className={className} style={style} aria-label={lexicon.label}>
      {menu.map(({ key, ...link }) => (
        <li key={key}>
          <Link
            {...link}
            key={key}
            hasActiveStyles={hasActiveStyles}
            hasTooltip={hasTooltips}
          />
        </li>
      ))}
    </ul>
  );
};
