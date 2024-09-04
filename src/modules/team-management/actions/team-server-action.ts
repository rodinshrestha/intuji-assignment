'use server';

import { revalidatePath } from 'next/cache';
import { notFound } from 'next/navigation';

import { executeFetch } from '@/lib/execute-fetch';

import { TeamManagementType } from '../team-management-types';

export const fetchTeam = async () => {
  const response = await executeFetch('/team/get-teams');

  if (!response.ok) {
    return notFound();
  }

  return (await response.json()) as { data: Array<TeamManagementType> };
};

export const createTeam = async (values: Record<'teamName', string>) => {
  const body = { team_name: values.teamName };
  try {
    await executeFetch('/team/create-team', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    revalidatePath('/team-management');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};

export const removeTeam = async (id: string) => {
  try {
    await executeFetch(`/team/${id}`, {
      method: 'delete',
    });

    revalidatePath('/team-management');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};

export const updateTeam = async (
  id: string,
  values: Record<'teamName', string>
) => {
  const body = { team_name: values.teamName };

  try {
    await executeFetch(`/team/${id}`, {
      method: 'put',
      body: JSON.stringify(body),
    });

    revalidatePath('/team-management');
    return { message: 'success' };
  } catch (error) {
    console.log(error);
    return { message: 'Failed' };
  }
};
