'use client';

import styled, { css } from 'styled-components';

/**
 * It should contain the font, color
 *
 */
const baseStyles = () => css`
  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }

  &.center {
    text-align: center;
  }
  &.error {
    color: red;
  }
`;

export const H1 = styled.h1`
  ${baseStyles}
  font-size: 2.5rem;
  font-weight: bold;
`;

export const H2 = styled.h2`
  ${baseStyles}
  font-size: 2rem;
  font-weight: bold;
`;

export const H3 = styled.h3`
  ${baseStyles}
  font-size: 1.75rem;
  font-weight: bold;
`;

export const H4 = styled.h4`
  ${baseStyles}
  font-size: 1.5rem;
  font-weight: bold;
`;

export const H5 = styled.h5`
  ${baseStyles}
  font-size: 1.25rem;
  font-weight: bold;
`;

export const H6 = styled.h6`
  ${baseStyles}
  font-size: 16px;
  font-weight: 500;
`;

export const P = styled.p`
  ${baseStyles}
  font-size: 1rem;
`;

export const Span = styled.span`
  ${baseStyles}
  font-size: 14px;
`;
