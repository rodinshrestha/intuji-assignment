'use client';
import styled, { css } from 'styled-components';

import { breakPoints } from '@/theme/break-points';

export const ContainerWrapper = styled.div`
  ${() => css`
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: ${breakPoints.tab}) {
      padding-right: 20px;
      padding-left: 20px;
    }

    @media (max-width: ${breakPoints.mobile}) {
      padding-right: 10px;
      padding-left: 10px;
    }

    &.container-fluid {
      @media (min-width: 576px) {
        max-width: 540px;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
      @media (min-width: 1200px) {
        max-width: 1088px;
      }
      @media (min-width: 1367px) {
        max-width: 1200px;
      }
      @media (min-width: 1537px) {
        max-width: 1440px;
      }
      @media (min-width: 1681px) {
        max-width: 1610px;
      }
    }

    &.p-0 {
      padding: 0;
    }
  `}
`;
