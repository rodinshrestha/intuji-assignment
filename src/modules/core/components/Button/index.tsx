'use client';
import React from 'react';

import clsx from 'clsx';

import { StyledButton } from './style';

export type SkinType =
  | 'primary'
  | 'secondary'
  | 'sucess'
  | 'warning'
  | 'info'
  | 'danger'
  | 'light'
  | 'dark'
  | 'body';
export type VariantType = 'contained' | 'outline' | 'link' | 'transparent';
export type SizeType = 'sm' | 'md' | 'lg' | 'fullWidth' | null;

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  variant: VariantType;
  size?: SizeType;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isLoading?: boolean;
  disabled?: boolean;
  asSelfLink?: boolean;
  type?: 'button' | 'submit';
  newTab?: boolean;
  style?: React.CSSProperties;
};

const Button = ({
  children,
  className,
  rounded = false,
  fullWidth = false,
  variant = 'contained',
  size = 'sm',
  onClick,
  disabled = false,
  isLoading = false,
  type = 'submit',
  style,
}: ButtonProps &
  (JSX.IntrinsicElements['button'] & JSX.IntrinsicElements['a'])) => {
  const defaultClass = clsx(className, {
    disabled: !!disabled,
    rounded: !!rounded,
    'full-width': !!fullWidth,
    [size as string]: !!size,
    [variant as string]: !!variant,
    isloading: !!isLoading,
  });

  return (
    <StyledButton
      className={`${defaultClass}`}
      type={type}
      style={style}
      aria-label={typeof children === 'string' ? children : 'button'}
    >
      <span onClick={onClick} aria-hidden>
        {isLoading && <p>Loading.....</p>}
        {!isLoading && children}
      </span>
    </StyledButton>
  );
};

export default Button;
