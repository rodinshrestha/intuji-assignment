import React from 'react';

import Card from '@/modules/core/components/Card';

import EditPlayerModal from '../EditPlayerModal';
import RemovePlayerModal from '../RemovePlayerModal';

import { StyledDiv } from './style';
type Props = {
  name: string;
  rating: string;
  id: string;
};

const PlayerList = ({ name, rating, id }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = React.useState(false);

  return (
    <StyledDiv>
      <Card
        name={name}
        rating={rating}
        onEditClick={() => setIsEditModalOpen(true)}
        onRemoveClick={() => setIsRemoveModalOpen(true)}
      />

      <EditPlayerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        name={name}
        rating={rating}
        id={id}
      />

      <RemovePlayerModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        fullName={name}
        id={id}
      />
    </StyledDiv>
  );
};

export default PlayerList;
