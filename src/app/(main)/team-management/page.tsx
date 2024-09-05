import React, { Suspense } from 'react';

import TeamManagement from '@/modules/team-management';
import { fetchTeam } from '@/modules/team-management/actions/team-server-action';

export const dynamic = 'force-dynamic';

const TeamManagementPage = async () => {
  const data = await fetchTeam();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TeamManagement data={data?.data || []} />
    </Suspense>
  );
};

export default TeamManagementPage;
