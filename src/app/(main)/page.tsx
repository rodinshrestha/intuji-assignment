import React, { Suspense } from 'react';

import { cookies } from 'next/headers';

import PlayerManagement from '@/modules/player-management';
import { fetchPlayer } from '@/modules/player-management/actions/player-actions';

const PlayerManagementPage = async () => {
  const data = await fetchPlayer();
  console.log(cookies);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PlayerManagement data={data?.data || []} />
    </Suspense>
  );
};

export default PlayerManagementPage;
