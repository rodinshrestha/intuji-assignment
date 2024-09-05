import React, { Suspense } from 'react';

import { fetchPlayer } from '@/modules/player-management/actions/player-actions';
import { fetchTeam } from '@/modules/team-management/actions/team-server-action';
import TeamGenerator from '@/modules/team-generator';

export const dynamic = 'force-dynamic';

const TeamGeneration = async () => {
  const [team, player] = await Promise.all([fetchTeam(), fetchPlayer()]).then(
    (res) => res
  );

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TeamGenerator team={team?.data || []} player={player?.data || []} />
    </Suspense>
  );
};

export default TeamGeneration;
