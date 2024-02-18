export const getAccessToken = async (): Promise<string | null> => {
  const token: string | null = localStorage.getItem("token") || null;

  return token;
};

export const tokenLoader = async (): Promise<string | null> => {
  return getAccessToken();
};
