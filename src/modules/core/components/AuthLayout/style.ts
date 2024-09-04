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

    .content-wrapper {
      width: calc(100vw - 300px);
      .top-header-wrapper {
        padding: 20px;
        background-color: ${theme.coreColor.primaryBgColor};
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-left: 30px;

        .user-group {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          text-align: right;

          .user-title {
            display: flex;
            flex-direction: column;
            color: rgb(28 36 52 / 1);

            .user-designation {
              color: #64748b;
              font-size: 12px !important;
            }
          }
        }
      }
    }
  `}
`;
