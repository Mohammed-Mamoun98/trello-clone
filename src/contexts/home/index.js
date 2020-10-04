import { createContext } from "react";

export const dialogInitState = {
  open: true,
  card: null,
};

const dialogMethods = {
  handleToggleDialog: () => {},
  setDialogInfo: () => {},
};

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

export const toggleDialog = (prevState, applyMethod) => {
  const newState = { ...prevState, open: !prevState.open };
  return newState;
};

export const editListCard = (boards, id, newList, applyMethod) => {
  const board = boards.find((b) => b.id === id);
  const newBoard = { ...board, items: newList };
  const newBoards = boards.map((board) => {
    if (board.id === id) {
      return {
        ...newBoard,
      };
    } else return board;
  });
  applyMethod([...newBoards]);
};

const initialState = {
  boards: [],
  editBoards: () => {},
  changeBoardName: () => {},
  ...dialogMethods,
};
export const Homecontext = createContext(initialState);
