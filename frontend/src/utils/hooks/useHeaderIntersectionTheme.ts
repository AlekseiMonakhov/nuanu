import { headerSlice } from '@/store/reducers/header';
import store from '@/store/store';
import { useOnPageScroll } from '@anton.bobrov/react-components';
import { useEvent } from '@anton.bobrov/react-hooks';
import { RefObject, useEffect, useRef, useState } from 'react';

type TTheme = 'dark' | 'light';

export function useHeaderIntersectionTheme(
  ref: RefObject<HTMLElement>,
  targetInTheme: TTheme,
  targetOutTheme: TTheme,
) {
  const [startTheme] = useState(store.getState().header.theme);
  const currentThemeRef = useRef(startTheme);

  const setTheme = useEvent((theme: TTheme) => {
    if (theme === currentThemeRef.current) {
      return;
    }

    currentThemeRef.current = theme;
    store.dispatch(headerSlice.actions.setTheme(theme));
  });

  const handleScroll = useEvent(() => {
    const header = document.getElementById('header');

    if (!ref.current || !header) {
      return;
    }

    const refBounding = ref.current.getBoundingClientRect();
    const headerBounding = header.getBoundingClientRect();

    const bottomThreshold = headerBounding.bottom - headerBounding.height / 2;

    setTheme(
      refBounding.bottom > bottomThreshold ? targetInTheme : targetOutTheme,
    );
  });

  useOnPageScroll(() => handleScroll());

  useEffect(() => {
    handleScroll();

    return () => {
      store.dispatch(headerSlice.actions.setTheme(startTheme));
    };
  }, [handleScroll, startTheme]);
}
