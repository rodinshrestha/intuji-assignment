'use client';

import React from 'react';

import SectionTitle from '../core/components/SectionTitle';

import AddPlayerModal from './components/AddPlayerModal';
import PlayerList from './components/PlayerList';
import { StyledDiv } from './style';

const bulkData = [
  {
    name: 'Rodin 1',
    rating: 3,
  },
  {
    name: 'Rodin 2',
    rating: 2,
  },
  {
    name: 'Rodin Shrestha',
    rating: 5,
  },
];

const PlayerManagement = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <StyledDiv>
      <SectionTitle
        title="Player List"
        buttonLabel="+ Add Player"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="player-list-wrapper">
        {bulkData.map((x, i) => {
          return <PlayerList key={i} {...x} />;
        })}
      </div>

      <AddPlayerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </StyledDiv>
  );
};

export default PlayerManagement;
