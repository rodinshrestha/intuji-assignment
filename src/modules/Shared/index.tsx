import React from 'react';

import { SharedTypeProps } from '../core/types/types';
import Card from '../core/components/Card';
import Typography from '../core/components/Typography';

import { StyledDiv } from './style';

type Props = {
  data: SharedTypeProps | null;
};

const Shared = ({ data }: Props) => {
  if (!data) {
    return <Typography variant="p">No Information Found</Typography>;
  }

  return (
    <StyledDiv className="shared-wrapper">
      {!!data.team_name.length && (
        <div className="team-with-player-result-wrapper">
          <div className="team-player-wrapper">
            {data.team_name.map((x, i) => {
              return (
                <Card
                  key={i}
                  name={`Team Name: ${x.team_name}`}
                  playerList={x.playerList}
                  showBtn={false}
                />
              );
            })}
          </div>
        </div>
      )}
    </StyledDiv>
  );
};

export default Shared;
