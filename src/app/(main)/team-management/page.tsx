import React from 'react';

import TeamManagement from '@/modules/team-management';
import { fetchTeam } from '@/modules/team-management/actions/team-server-action';

const TeamManagementPage = async () => {
  const data = await fetchTeam();

  return <TeamManagement data={data?.data || []} />;
};

export default TeamManagementPage;
