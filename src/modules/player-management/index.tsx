'use client';

import React from 'react';

import SectionTitle from '../core/components/SectionTitle';
import Typography from '../core/components/Typography';

import AddPlayerModal from './components/AddPlayerModal';
import PlayerList from './components/PlayerList';
import { StyledDiv } from './style';
import { PlayerManagementTypes } from './player-management-types';

type Props = {
  data: Array<PlayerManagementTypes>;
};

const PlayerManagement = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <StyledDiv>
      <SectionTitle
        title="Player List"
        buttonLabel="+ Add Player"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="player-list-wrapper">
        {data.map((x, i) => {
          return (
            <PlayerList
              key={i}
              name={x.player_name}
              rating={x.rating}
              id={x._id}
            />
          );
        })}
      </div>

      {!data.length && (
        <Typography variant="p">Player List is empty.</Typography>
      )}

      <AddPlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </StyledDiv>
  );
};

export default PlayerManagement;
