import { createContext } from "react";

const initialState = {
  boards: [],
  editBoards: () => {},
};
export const Homecontext = createContext(initialState);
