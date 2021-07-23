import React, { createContext, ReactNode, useState } from "react";
import { api } from "../services/api";


type AuthContextData = {
    signed: boolean;
    user: string;
    signIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
    
    const user = typeof window !== 'undefined' ? localStorage.getItem('partner') : null

    async function signIn(email, password) {
        // const response = await api.post("/sessions", { email, senha: password });
        // const { token } = response.data;
        // const { user } = response.data;
        // const { id } = user;
        // localStorage.setItem("partner", id);
        // localStorage.setItem("token-access", token);
    }
 

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
