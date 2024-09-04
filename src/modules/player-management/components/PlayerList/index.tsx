import React from 'react';

import Card from '@/modules/core/components/Card';

import EditPlayerModal from '../EditPlayerModal';
import RemovePlayerModal from '../RemovePlayerModal';

import { StyledDiv } from './style';
type Props = {
  name: string;
  rating: number;
};

const PlayerList = ({ name, rating }: Props) => {
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
      />

      <RemovePlayerModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        fullName={name}
        onSuccess={() => alert('delete triggered')}
      />
    </StyledDiv>
  );
};

export default PlayerList;
