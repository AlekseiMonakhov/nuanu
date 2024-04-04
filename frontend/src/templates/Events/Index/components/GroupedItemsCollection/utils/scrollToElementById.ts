import { scrollToElement } from '@anton.bobrov/vevet-init';

export function scrollToElementById(id: string) {
  const element = document.getElementById(id);
  const header = document.getElementById('header');

  if (!element || !header) {
    return;
  }

  const headerBounding = header.getBoundingClientRect();
  const fullHeaderHeight = headerBounding.top * 2 + headerBounding.height;

  scrollToElement({
    container: window,
    element,
    duration: (px) => Math.min(px, 500),
    top: fullHeaderHeight,
  });
}
