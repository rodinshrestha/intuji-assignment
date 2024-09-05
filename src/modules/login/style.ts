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
      width: 500px;
      border-radius: 10px;
      background-color: ${theme.coreColor.bodyBgColor};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 80px;
      flex-direction: column;
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .form-field-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  `}
`;
