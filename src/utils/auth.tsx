export const getAccessToken = async (): Promise<string | null> => {
  const token = localStorage.getItem("token");
  return token;
};
