import { createContext } from "react";

const initState = {
  addListCard: () => {},
  lists: [],
  editListCard: () => {},
  id: "",
  title: "",
};

export const boardContext = createContext(initState);
