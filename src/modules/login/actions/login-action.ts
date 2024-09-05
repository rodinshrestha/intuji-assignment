'use server';
import { cookies } from 'next/headers';

import { executeFetch } from '@/lib/execute-fetch';
import { AUTH_TOKEN } from '@/modules/core/constants/auth.constants';

export const checkAuth = async (authToken: string) => {
  return await executeFetch('/user/auth', {
    headers: {
      Authorization: `${authToken}`,
    },
  });
};

export const loginUser = async (email: string, password: string) => {
  const cookie = cookies();
  const data = { email, password };

  const response = await executeFetch('/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return 'failed';
  }

  const resp = await response.json();
  cookie.set(AUTH_TOKEN, resp?.token || '');
  return 'success';
};
