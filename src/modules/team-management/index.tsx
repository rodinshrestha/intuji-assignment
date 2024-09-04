'use client';

import React from 'react';

import SectionTitle from '../core/components/SectionTitle';

import AddTeamModal from './components/AddTeamModal';
import TeamList from './components/TeamList';
import { StyledDiv } from './style';
import { TeamManagementType } from './team-management-types';

type Props = {
  data: Array<TeamManagementType>;
};

const TeamManagement = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <StyledDiv>
      <SectionTitle
        title="Team List"
        buttonLabel="+ Add Team"
        onClick={() => setIsModalOpen(true)}
      />
      <div className="team-list-wrapper">
        {data.map((x, i) => {
          return <TeamList key={i} teamName={x.team_name} id={x._id} />;
        })}
      </div>

      <AddTeamModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </StyledDiv>
  );
};

export default TeamManagement;
