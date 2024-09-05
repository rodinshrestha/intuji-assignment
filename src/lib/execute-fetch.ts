export const baseAPI =
  process.env.NEXT_PUBLIC_API_URL || 'https://its-my-api.onrender.com';

export const executeFetch = async (
  url: `/${string}`,
  init?: RequestInit
): Promise<Response> => {
  const { headers = {}, ...rest } = init || {};
  const response = await fetch(`${baseAPI}${url}`, {
    ...rest,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  if ([401, 403].includes(response.status)) {
    // Remove auth token
    // cookie.delete(AUTH_TOKEN);
    // redirect('/login');
  }
  return response;
};
