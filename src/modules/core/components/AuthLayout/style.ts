'use client';
import styled, { css } from 'styled-components';

export const StyledMain = styled.main`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    width: 100%;

    .sidebar-wrapper {
      background-color: ${theme.coreColor.sidebarBgColor};
      color: ${theme.coreColor.primaryTextColor};
      padding: 10px;
      min-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .side-bar-item {
        padding: 10px 15px;
        cursor: pointer;
        &:hover {
          background-color: ${theme.coreColor.activeBgColor};
        }
      }

      .active {
        background-color: ${theme.coreColor.activeBgColor};
      }
    }
  `}
`;
