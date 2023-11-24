import { FC, useEffect, useRef, useState } from 'react';
import { Portal } from 'react-portal';
import cn from 'classnames';
import { useOnPageLoad } from '@anton.bobrov/react-vevet-hooks';
import { Content } from './Content';
import styles from './styles.module.scss';

const LSName = 'cookies_accepted';

export const Cookies: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(LSName)) {
      setIsRendered(true);
    }
  }, []);

  useOnPageLoad(() => setIsVisible(true), []);

  const accept = () => {
    localStorage.setItem(LSName, 'true');
    setIsVisible(false);
  };

  if (!isRendered) {
    return null;
  }

  return (
    <Portal>
      <div
        ref={ref}
        className={cn(styles.cookies, isVisible && styles.show)}
        onTransitionEnd={() => !isVisible && setIsRendered(false)}
      >
        <Content onAccept={accept} />
      </div>
    </Portal>
  );
};
