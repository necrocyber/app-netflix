import axiosInstance from "../utils/axios";
import { userAuth } from "../types/user.type";

export type ErrorResponseType = {
  statusCode: number;
  timestamp: string;
  path: string;
  payload: any;
};

type SuccessResponse = {
  id: string;
  email: string;
  name: string;
  password: string;
};

export const getUserApi = async (): Promise<undefined | SuccessResponse> => {
  const { data, status } = await axiosInstance.get<any | ErrorResponseType>(
    `/user`
  );

  if (status === 200) {
    return data;
  }

  return Promise.reject(new Error((data as ErrorResponseType).payload?.error));
};

export const postUserApi = async (
  params: userAuth
): Promise<SuccessResponse | any> => {
  const { data, status } = await axiosInstance.post<any | ErrorResponseType>(
    "",
    params
  );

  if (status === 200 || status === 201) {
    return data;
  }

  return Promise.reject(new Error((data as ErrorResponseType).payload?.error));
};
