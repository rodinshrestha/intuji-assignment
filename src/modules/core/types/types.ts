import { PlayerManagementTypes } from '@/modules/player-management/player-management-types';
import { TeamManagementType } from '@/modules/team-management/team-management-types';

export type TeamWithPlayerType = Array<
  Omit<TeamManagementType, '_id'> & {
    playerList: Array<Omit<PlayerManagementTypes, '_id'>>;
  }
>;

export type SharedTypeProps = {
  shared_id: string;

  team_name: TeamWithPlayerType;
};
