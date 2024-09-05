import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.coreColor.sidebarBgColor};
    display: flex;
    justify-content: center;
    align-items: center;

    .login-wrapper {
      height: 500px;
      width: 800px;
      background-color: ${theme.coreColor.bodyBgColor};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      flex-direction: column;

      .form-field-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  `}
`;
