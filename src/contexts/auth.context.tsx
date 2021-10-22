import React, { createContext, useContext, FC } from "react";
import { userAuth } from "../types/user.type";

const AuthContext = createContext<userAuth | null>(null);

/*
import { createContext, FC, useCallback, useContext } from 'react';
import { useQueryClient, useQuery } from 'react-query';

import { getUserApi } from 'api/user';
import * as auth from 'api/auth';
import WideLoader from 'components/utils/wide-loader';
import type { UserType } from 'types/auth';
*/
/*
export type StateType = {
  user: UserType | undefined;
  isLoading: boolean;
  isIdle: boolean;
  isSuccess: boolean;
  logout: () => void;
};

const AuthContext = createContext({} as StateType);
*/

const AuthProvider: FC = (props) => {
  const user = props || null;
  return <AuthContext.Provider value={{ name: "", email: "", password: "" }} />;
};

const useAuth = (): userAuth => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
