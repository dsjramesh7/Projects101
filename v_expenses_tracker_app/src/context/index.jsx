import { createContext } from "react";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
