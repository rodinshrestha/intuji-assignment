import React from 'react';

import Card from '@/modules/core/components/Card';

import EditTeamModal from '../EditTeamModal';
import RemoveTeamModal from '../RemoveTeamModal';

import { StyledDiv } from './style';
type Props = {
  teamName: string;
  id: string;
};

const TeamList = ({ teamName, id }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = React.useState(false);

  return (
    <StyledDiv>
      <Card
        name={teamName}
        onEditClick={() => setIsEditModalOpen(true)}
        onRemoveClick={() => setIsRemoveModalOpen(true)}
      />

      <EditTeamModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        teamName={teamName}
        id={id}
      />

      <RemoveTeamModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        teamName={teamName}
        id={id}
      />
    </StyledDiv>
  );
};

export default TeamList;
