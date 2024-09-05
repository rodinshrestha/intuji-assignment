'use server';

import { revalidatePath } from 'next/cache';

import { executeFetch } from '@/lib/execute-fetch';

import { PlayerManagementTypes } from '../player-management-types';

export const fetchPlayer = async () => {
  const response = await executeFetch('/player/get-players');

  if (!response.ok) {
    return { data: [] };
  }

  return (await response.json()) as { data: Array<PlayerManagementTypes> };
};

export const createPlayer = async (
  values: Record<'playerName' | 'rating', string>
) => {
  const body = { player_name: values.playerName, rating: values.rating };
  try {
    await executeFetch('/player/create-player', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    revalidatePath('/');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};

export const removePlayer = async (id: string) => {
  try {
    await executeFetch(`/player/${id}`, {
      method: 'delete',
    });

    revalidatePath('/');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};

export const updatePlayer = async (
  id: string,
  values: Record<'playerName' | 'rating', string>
) => {
  const body = { player_name: values.playerName, rating: values.rating };

  try {
    await executeFetch(`/player/${id}`, {
      method: 'put',
      body: JSON.stringify(body),
    });

    revalidatePath('/');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};
