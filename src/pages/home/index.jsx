import React, { useEffect, useState } from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import { Homecontext, dialogInitState } from "./../../contexts/home/index";
import AddBoard from "./components/board/add-board/index";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import { handleDragEnd } from "../../utils/methods/drag-methods";
import ActivityDialog from "./components/board/activity-dialog";
import { useDispatch } from "react-redux";
import { _editBoards, _editListCards } from "./../../redux/actions/shared";
import useStoreState from "./../../hooks/useStoreState";

export default function Home() {
  const dispatch = useDispatch();
  const [boards, setBoards] = useState([]);
  const storeState = useStoreState();
  const { sharedReducer } = storeState;
  const { boards: _boards } = sharedReducer;

  const [dialogState, setDialogState] = useState(dialogInitState);
  const allCards = _boards.map((b) => b.items).flat();

  const editBoards = (newBoards) => setBoards(newBoards);

  const editListCard = (id, newList) => {
    dispatch(_editListCards(id, newList));
  };

  const onDragEnd = (result) => {
    handleDragEnd(result, _boards, allCards, editListCard);
  };

  const handleToggleDialog = () => {
    debugger;
    const newState = { open: !dialogState.open, card: null };
    setDialogState({ ...newState });
  };

  const setDialogInfo = (cardId) => {
    const card = allCards.find((c) => c.id === cardId);
    setDialogState({ ...dialogState, card, open: true });
  };

  return (
    <Homecontext.Provider value={{ handleToggleDialog, setDialogInfo }}>
      <div className="home ">
        <BoardHeader />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="boards-wrapper flex ">
            {_boards.map((board) => (
              <Board
                key={uuidv4()}
                board={board}
                boards={boards}
                editBoards={editBoards}
              />
            ))}

            <AddBoard boards={boards} editBoards={editBoards} />
          </div>
        </DragDropContext>
        <ActivityDialog {...dialogState} onClose={handleToggleDialog} />
      </div>
    </Homecontext.Provider>
  );
}
