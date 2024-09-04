'use client';

import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    flex: 0 0 50%;
    box-shadow:
      0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${theme.coreColor.primaryBgColor};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .avatar-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .player-information-container {
      padding: 10px;
      border-top: ${theme.coreColor.borderColor};
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `}
`;
