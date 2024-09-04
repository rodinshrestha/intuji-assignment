'use client';
import styled, { css } from 'styled-components';

import { getWidthString } from '@/core/utils/string';

import { ColProps } from '.';

type StyledProps = {
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $xxl?: number;
  $xxxl?: number;
};

export const ColWrapper = styled.div<ColProps & StyledProps>`
  ${({ $xs, $sm, $md, $lg, $xl, $xxl, $xxxl }) => css`
    flex-basis: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
    max-width: 100%;
    padding-right: 10px;
    padding-left: 10px;

    ${$xs &&
    `@media only screen and (min-width: 361px) {
        ${getWidthString($xs)}
      }
    `}

    ${$sm &&
    `@media only screen and (min-width: 576px) {
        ${getWidthString($sm)}
      }
    `}

    ${$md &&
    `@media only screen and (min-width: 768px) {
        ${getWidthString($md)}
      }
    `}

    ${$lg &&
    `@media only screen and (min-width: 992px) {
        ${getWidthString($lg)}
      }
    `}

    ${$xl &&
    `@media only screen and (min-width: 1200px) {
        ${getWidthString($xl)}
      }
    `}

    ${$xxl &&
    `@media only screen and (min-width: 1441px) {
        ${getWidthString($xxl)}
      }
    `}

    ${$xxxl &&
    `@media only screen and (min-width: 1681px) {
        ${getWidthString($xxxl)}
      }
    `}
  `}
`;
