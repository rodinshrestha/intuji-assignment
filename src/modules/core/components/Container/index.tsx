import React from 'react';

import clsx from 'clsx';

import { ContainerWrapper } from './style';

export type ContainerType = 'normal' | 'fluid';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  fluid?: boolean;
  id?: string;
};

export const Container = ({
  className,
  children,
  fluid = false,
  id = '',
}: ContainerProps) => {
  return (
    <ContainerWrapper
      className={clsx(className, 'container', {
        'container-fluid': fluid,
      })}
      id={id}
    >
      {children}
    </ContainerWrapper>
  );
};
