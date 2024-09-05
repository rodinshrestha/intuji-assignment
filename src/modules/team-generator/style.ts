import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: 100%;
  width: 100%;

  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .team-with-player-result-wrapper {
    margin-top: 20px;

    .team-player-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
    }
  }
`;
