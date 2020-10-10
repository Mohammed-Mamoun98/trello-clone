export const EDIT_BOARDS = "EDIT_BOARDS";
export const ADD_BOARD = "ADD_BOARD";
export const EDIT_LIST_CARDS = "EDIT_LIST_CARDS";
export const ADD_LIST_CARD = "ADD_LIST_CARD";
export const EDIT_BOARD_NAME = "EDIT_BOARD_NAME";
export const SET_DIALOG_ITEM = "SET_DIALOG_ITEM";

export const setDialigItem = (item = {}) => ({
  type: SET_DIALOG_ITEM,
  item,
});

export const _addListCard = (text, board) => ({
  type: ADD_LIST_CARD,
  text,
  board,
});

export const addBoard = (title) => ({
  type: ADD_BOARD,
  title,
});

export const _editListCards = (id, newList) => ({
  type: EDIT_LIST_CARDS,
  id,
  newList,
});

export const _editBoards = (boards = []) => ({
  type: EDIT_BOARDS,
  boards,
});

export const _editBoardName = (id, newName) => ({
  type: EDIT_BOARD_NAME,
  id,
  newName,
});
