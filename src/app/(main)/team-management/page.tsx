import React, { Suspense } from 'react';

import { cookies } from 'next/headers';

import TeamManagement from '@/modules/team-management';
import { fetchTeam } from '@/modules/team-management/actions/team-server-action';

const TeamManagementPage = async () => {
  console.log(cookies);

  const data = await fetchTeam();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TeamManagement data={data?.data || []} />
    </Suspense>
  );
};

export default TeamManagementPage;
