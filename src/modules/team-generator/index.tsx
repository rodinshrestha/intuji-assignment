'use client';
import React from 'react';

import { TeamManagementType } from '../team-management/team-management-types';
import { PlayerManagementTypes } from '../player-management/player-management-types';
import InputField from '../core/components/InputField';
import Button from '../core/components/Button';
import Typography from '../core/components/Typography';
import Card from '../core/components/Card';
import SectionTitle from '../core/components/SectionTitle';
import { TeamWithPlayerType } from '../core/types/types';
import { generateUniqueHashKey } from '../core/utils/generate-hash-key';

import { StyledDiv } from './style';
import { generateTeam } from './utils/generate-team';
import ShareModal from './components/ShareModal';
import { createTeamGenerator } from './actions/team-generator-action';

type Props = {
  team: Array<TeamManagementType>;
  player: Array<PlayerManagementTypes>;
};

const TeamGenerator = ({ team, player }: Props) => {
  const [loader, setLoader] = React.useState(false);
  const [eventName, setEventName] = React.useState('');
  const [hasKey, setHasKey] = React.useState('');
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);
  const [state, setState] = React.useState<{
    errorMsg: string | null;
    teamWithPlayer: TeamWithPlayerType;
  }>({
    errorMsg: null,
    teamWithPlayer: [],
  });

  const handleShare = () => {
    setLoader(true);
    const hashId = generateUniqueHashKey();
    setHasKey(hashId);
    createTeamGenerator({
      shared_id: hashId,
      team_name: state.teamWithPlayer,
    })
      .then(() => {
        setIsShareModalOpen(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <StyledDiv>
      <div className="form-wrapper">
        <InputField
          placeholder="Firday Futsal"
          name="event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />

        <Button
          variant="contained"
          disabled={!eventName}
          onClick={() => {
            setState(generateTeam(team, player));
          }}
        >
          Generate
        </Button>
      </div>

      <div className="result-wrapper">
        {state.errorMsg && (
          <Typography variant="p">{state.errorMsg}</Typography>
        )}

        {!!state.teamWithPlayer.length && (
          <div className="team-with-player-result-wrapper">
            <SectionTitle
              title={`Event Name : ${eventName}`}
              buttonLabel="Share"
              onClick={handleShare}
              loader={loader}
            />
            <div className="team-player-wrapper">
              {state.teamWithPlayer.map((x, i) => {
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
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        hasKey={hasKey}
      />
    </StyledDiv>
  );
};

export default TeamGenerator;
