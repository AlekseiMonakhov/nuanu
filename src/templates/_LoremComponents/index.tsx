import { FC } from 'react';
import { PageScroll } from '@anton.bobrov/react-components';
import { BreadcrumbsList } from '@/layout/Breadcrumbs/List';
import { LayoutContainer } from '@/layout/Container';
import { LayoutWrap } from '@/layout/Wrap';
import { Block } from './Block';
import { Buttons } from './lorem/Buttons';
import { Form } from './lorem/Form';
import { Typography } from './lorem/Typography';
import { useTemplate } from '../_hooks/useTemplate';
import { ILoremComponents } from './types';

const LoremComponents: FC<ILoremComponents> = () => {
  useTemplate();

  return (
    <PageScroll.SmoothContainer>
      <LayoutContainer>
        <LayoutWrap variant={1}>
          <BreadcrumbsList />

          <Block title="Typography">
            <Typography />
          </Block>

          <Block title="Buttons">
            <Buttons />
          </Block>

          <Block title="Form">
            <Form />
          </Block>
        </LayoutWrap>
      </LayoutContainer>
    </PageScroll.SmoothContainer>
  );
};

export default LoremComponents;
