import React from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import AddBoard from "./components/board/add-board/index";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import { handleDragEnd } from "../../utils/methods/drag-methods";
import ActivityDialog from "./components/board/activity-dialog";
import { useDispatch } from "react-redux";
import {
  _editBoards,
  _editListCards,
  setDialigItem,
} from "./../../redux/actions/shared";
import useStoreState from "./../../hooks/useStoreState";

export default function Home() {
  const dispatch = useDispatch();
  const storeState = useStoreState();
  const { sharedReducer } = storeState;
  const { boards: _boards, dialogState } = sharedReducer;
  const allCards = _boards.map((b) => b.items).flat();

  const editListCard = (id, newList) => {
    dispatch(_editListCards(id, newList));
  };

  const onDragEnd = (result) => {
    handleDragEnd(result, _boards, allCards, editListCard);
  };

  const closeDialog = () => {
    dispatch(setDialigItem(null));
  };

  return (
    <div className="home">
      <BoardHeader />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="boards-wrapper flex ">
          {_boards.map((board) => (
            <Board key={uuidv4()} board={board} />
          ))}
          <AddBoard />
        </div>
      </DragDropContext>
      <ActivityDialog {...dialogState} onClose={closeDialog} />
    </div>
  );
}
