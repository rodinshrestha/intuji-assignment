import { TeamWithPlayerType } from '@/modules/core/types/types';
import { PlayerManagementTypes } from '@/modules/player-management/player-management-types';
import { TeamManagementType } from '@/modules/team-management/team-management-types';

/**
 *
 * - It is accepts the 2 arguments.
 * - First argument should be list of team and 2nd should be list of player.
 * - It uses the round robin distrubtion to distrubute the team accordingly.
 */
export const generateTeam = (
  team: Array<TeamManagementType>,
  player: Array<PlayerManagementTypes>
): { teamWithPlayer: TeamWithPlayerType; errorMsg: string | null } => {
  if (!team || !team.length) {
    return {
      teamWithPlayer: [],
      errorMsg: 'There is no team available at the moment',
    };
  }

  if (!player || !player.length) {
    return {
      teamWithPlayer: [],
      errorMsg: 'There is no player available at the moment',
    };
  }

  if (team.length > player.length) {
    return {
      teamWithPlayer: [],
      errorMsg:
        'Player is less than the number teams. Players should always be more than the number of team.',
    };
  }

  //Sorting the player according to ratings;
  const assendingPlayer = player.sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );

  //sanitize assending player
  const sanitizePLayerList = assendingPlayer.map((x) => ({
    player_name: x.player_name,
    rating: x.rating,
  }));

  //Creating teams with playerList attributes
  const teamWithPlayer: TeamWithPlayerType = team.map((x) => ({
    team_name: x.team_name,
    playerList: [],
  }));

  //Distrubting the players with the round-robin mannners
  sanitizePLayerList.forEach((player, i) => {
    const teamIndex = i % teamWithPlayer.length;

    teamWithPlayer[teamIndex] = {
      ...teamWithPlayer[teamIndex],
      playerList: [...(teamWithPlayer?.[teamIndex]?.playerList || []), player],
    };
  });

  return { teamWithPlayer, errorMsg: null };
};
