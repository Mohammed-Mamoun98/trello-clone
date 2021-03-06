import {
  _addListCard,
  ADD_BOARD,
  ADD_LIST_CARD,
  EDIT_BOARDS,
  EDIT_LIST_CARDS,
  SET_DIALOG_ITEM,
  EDIT_ITEM_DESCRIPTION,
} from "../actions/shared";
import sharedState from "./stateModels/shared";
import { EDIT_BOARD_NAME } from "./../actions/shared";

import {
  addBoardMethod,
  getNewListCard,
  addListCardMethod,
  changeBoardName,
} from "./../methods/home/boards-handling";
import { editDescription } from "../methods/home/item-handling";

const sharedReducer = (state = sharedState, action) => {
  const { boards } = state;

  switch (action.type) {

    case EDIT_ITEM_DESCRIPTION:{
      const {itemID ,description , boardID } = action

    const newBoards =   editDescription(itemID , boards , boardID,description)

      return {
        ...state,
        boards : newBoards
      }}
    case ADD_LIST_CARD: {
      const { text, board } = action;
      const { id } = board;
      const newCardList = addListCardMethod(text, id, board);
      const newBoards = getNewListCard(id, newCardList, boards);
      return {
        ...state,
        boards: newBoards,
      };
    }
    case EDIT_LIST_CARDS:
      const { id, newList } = action;
      const newBoards = getNewListCard(id, newList, boards);
      return {
        ...state,
        boards: newBoards,
      };
    case ADD_BOARD: {
      const { title } = action;
      const newBoards = addBoardMethod(title, boards);
      return {
        ...state,
        boards: newBoards,
      };
    }
    case EDIT_BOARD_NAME: {
      const { id, newName } = action;
      const newBoards = changeBoardName(id, newName, boards);
      console.log({ newBoards });
      return {
        ...state,
        boards: newBoards,
      };
    }
    case EDIT_BOARDS: {
      const { boards } = action;
      return {
        ...state,
        boards,
      };
    }

    case SET_DIALOG_ITEM:
      const { item } = action;
      return {
        ...state,
        dialogState: { item },
      };

    default:
      return {
        ...state,
      };
  }
};

export default sharedReducer;
