import { WheelEvent } from 'react';

export function stopWheelPropagationUnlessScrollEnd(event: WheelEvent<any>) {
  if (!(event.currentTarget instanceof HTMLElement)) {
    return;
  }

  const { clientHeight, scrollHeight, scrollTop } = event.currentTarget;
  const maxScrollTop = scrollHeight - clientHeight;

  if (scrollTop === 0 && event.deltaY < 0) {
    return;
  }

  if (Math.ceil(scrollTop) === Math.ceil(maxScrollTop) && event.deltaY > 0) {
    return;
  }

  event.stopPropagation();
}
