import { createContext } from "react";

const initState = {
  addListCard: () => {},
  lists: [],
};

export const boardContext = createContext(initState);
