import styled, { css } from 'styled-components';

export const StyledDiv = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white['100']};
    height: 300px;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .rating-field-wrapper {
        display: flex;
        flex-direction: column;

        .error {
          color: ${theme.color.red['900']};
        }
      }
    }
  `}
`;
