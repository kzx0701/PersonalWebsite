import { fetchData, insertData } from "./databaseService";

export const getUserAuth = async () => {
  return await fetchData("user_auth");
};

export const createUserAuth = async (userData: any) => {
  return await insertData("user_auth", userData);
};
