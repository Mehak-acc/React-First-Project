import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  return (
    <StoreContext.Provider value={{ user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider, StoreContext };
