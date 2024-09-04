
export const baseAPI = process.env.NEXT_PUBLIC_API_URL;

export const executeFetch = async (
  url: `/${string}`,
  init?: RequestInit
): Promise<Response> => {
  const response = await fetch(`${baseAPI}${url}`, init);

  if ([401].includes(response.status)) {
    // Remove auth token
  }
  return response;
};

