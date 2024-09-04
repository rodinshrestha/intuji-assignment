import React from 'react';

import clsx from 'clsx';

import { RowWrapper } from './style';

export type RowType = 'row' | 'noGutter';

export type RowProps = {
  children?: React.ReactNode;
  noGutter?: boolean;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export const Row = ({
  noGutter = false,
  children,
  className,
  id,
  style,
}: RowProps) => {
  return (
    <RowWrapper
      $noGutter={noGutter}
      className={clsx('row', className, { noGutter: 'no-gutters' })}
      style={style}
      id={id}
    >
      {children}
    </RowWrapper>
  );
};
