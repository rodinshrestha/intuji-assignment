import React from 'react';

import PlayerManagement from '@/modules/player-management';
import { fetchPlayer } from '@/modules/player-management/actions/player-actions';

export const dynamic = 'force-dynamic';
const PlayerManagementPage = async () => {
  const data = await fetchPlayer();

  return <PlayerManagement data={data?.data || []} />;
};

export default PlayerManagementPage;
