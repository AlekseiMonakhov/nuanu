import { FC } from 'react';
import { BreadcrumbsList } from '@/layout/Breadcrumbs/List';
import { LayoutContainer } from '@/layout/Container';
import { LayoutWrap } from '@/layout/Wrap';
import { Block } from './Block';
import { Typography } from './lorem/Typography';
import { useTemplate } from '../_hooks/useTemplate';
import { ILoremComponents } from './types';

const LoremComponents: FC<ILoremComponents> = () => {
  useTemplate();

  return (
    <LayoutContainer>
      <LayoutWrap variant={1}>
        <BreadcrumbsList />

        <Block title="Typography">
          <Typography />
        </Block>
      </LayoutWrap>
    </LayoutContainer>
  );
};

export default LoremComponents;
