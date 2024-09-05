import { executeFetch } from '@/lib/execute-fetch';
import {
  SharedTypeProps,
  TeamWithPlayerType,
} from '@/modules/core/types/types';

type Arguments = {
  shared_id: string;
  team_name: TeamWithPlayerType;
};
export const createTeamGenerator = async (data: Arguments) => {
  try {
    await executeFetch('/share/create-share', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return { message: 'success' };
  } catch {
    return { message: 'failed' };
  }
};

export const fetchSharedTeam = async (id: string) => {
  const response = await executeFetch(`/share/get-share-list/${id}`, {
    method: 'GET',
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as { data: SharedTypeProps };
};
