import { createContext, useState } from "react";

export const SelectedTpgContext = createContext();

export const SelectedTpgProvider = ({ children }) => {

    const [selectedTpg,setSelectedTpg]= useState();

  return (
    <SelectedTpgContext.Provider value={{selectedTpg,setSelectedTpg}}>
      {children}
    </SelectedTpgContext.Provider>
  );
};
