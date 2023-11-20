import { FC } from 'react';
import { ButtonSimple } from '@/components/Button/Simple';

export const Buttons: FC = () => (
  <>
    <ButtonSimple
      tag="button"
      type="button"
      kind="outline"
      theme="dark"
      text="Simple Button"
    />
    <br />

    <ButtonSimple
      tag="button"
      type="button"
      kind="outline"
      theme="light"
      text="Simple Button"
    />
    <br />

    <ButtonSimple
      tag="button"
      type="button"
      kind="fill"
      theme="dark"
      text="Simple Button"
    />
    <br />

    <ButtonSimple
      tag="button"
      type="button"
      kind="fill"
      theme="light"
      text="Simple Button"
    />
    <br />
  </>
);
