import React from 'react';

import clsx from 'clsx';
import { CSSProperties } from 'styled-components';

import { H1, H2, H3, H4, H5, H6, Span, P } from './style';

export type TypographyVariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span';

interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariantType;
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  style?: CSSProperties;
}

const Typography = ({
  variant,
  children,
  className,
  align,
  style,
}: TypographyProps) => {
  const componentMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: P,
    span: Span,
  };

  const TypographyComponent = componentMap[variant];

  if (!TypographyComponent) {
    throw new Error('Variants not found in component map');
  }

  return (
    <TypographyComponent
      className={clsx(className, { [align as string]: !!align })}
      style={style}
    >
      {children}
    </TypographyComponent>
  );
};

export default Typography;
