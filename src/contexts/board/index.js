import { createContext } from "react";

const initState = {
  addListCard: () => {},
  lists: [],
  editListCard: () => {},
  id: "",
};

export const boardContext = createContext(initState);
