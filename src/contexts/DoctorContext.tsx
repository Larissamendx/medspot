import React, { createContext, ReactNode, useState } from "react";



type DoctorContextData = {
 
};

type DoctorContextProviderProps = {
  children: ReactNode;
};

export const DoctorContext = createContext({} as DoctorContextData);

export function DoctorContextProvider({
  children,
}: DoctorContextProviderProps) {

  return (
    <DoctorContext.Provider
      value={{

      }}
    >
      {children}
    </DoctorContext.Provider>
  );
}
