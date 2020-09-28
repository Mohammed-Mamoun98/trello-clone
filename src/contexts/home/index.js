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
  dragState: {
    isDraging: false,
    changeDragState: (value) => {},
  },
  whoIsDragged: "",
  setWhoIsDragged: () => {},
};
export const Homecontext = createContext(initialState);
