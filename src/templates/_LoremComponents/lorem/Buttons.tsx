import { FillButton } from '@/components/Button/Fill';
import { FC } from 'react';

export const Buttons: FC = () => (
  <>
    <FillButton tag="button" type="button" theme="dark" text="Fill Button" />
    <br />

    <FillButton tag="button" type="button" theme="light" text="Fill Button" />
    <br />

    <FillButton
      tag="button"
      type="button"
      theme="dark"
      text="Fill Button"
      isSuccess
    />
    <br />

    <FillButton
      tag="button"
      type="button"
      theme="light"
      text="Fill Button"
      isSuccess
    />
    <br />
  </>
);
