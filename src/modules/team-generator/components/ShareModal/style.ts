import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content-wrapper {
    span {
      color: red;
      font-size: 12px;
    }
  }

  .btn-group {
    display: flex;
    justify-content: center;
  }
`;
