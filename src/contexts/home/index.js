import { createContext } from "react";

/*

interface Item{
  title : string
  id : string
}



interface Board{
title : string
id : string
items : Item[]
}


*/

const initialState = {
  boards: [],
  editBoards: () => {},
  changeBoardName: () => {},
};
export const Homecontext = createContext(initialState);
