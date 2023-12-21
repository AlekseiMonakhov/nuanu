import { FC, useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useNonMobileHover } from '@anton.bobrov/react-vevet-hooks';
import { IProps } from './types';
import styles from './styles.module.scss';
import { String } from './String';

export const FooterAddress: FC<IProps> = ({ className, style }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const isHovered = useNonMobileHover(ref);

  return (
    <Link
      ref={ref}
      className={cn(className, styles.footer_address)}
      style={style}
      href="https://maps.app.goo.gl/19gDe3voCUeG9Wvj7"
      target="_blank"
      rel="noopener noreferrer"
    >
      <String isHovered={isHovered} text="Jl. Galiran, Beraban, Kec. Kediri," />

      <String isHovered={isHovered} text="Kabupaten Tabanan, 82121" />

      <String isHovered={isHovered} text="Bali, Indonesia" />
    </Link>
  );
};
