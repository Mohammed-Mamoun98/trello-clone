import React from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import { Homecontext } from "./../../contexts/home/index";
import { useState } from "react";
import AddBoard from "./components/board/add-board/index";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";
import { reorder } from "./../../utils/methods/array";

export default function Home() {
  const [boards, setBoards] = useState([]);
  const [isDraging, setIsDraging] = useState(false);
  const [whoIsDragged, setWhoIsDragged] = useState("");

  const changeDragState = (state) => setIsDraging(state);

  const dragState = {
    isDraging,
    changeDragState,
  };
  const editBoards = (newBoards) => setBoards(newBoards);

  const editListCard = (id, newList) => {
    const board = boards.find((b) => b.id === id);
    const newBoard = { ...board, items: newList };
    const newBoards = boards.map((board) => {
      if (board.id === id) {
        return {
          ...newBoard,
        };
      } else return board;
    });
    editBoards([...newBoards]);
  };

  const onDragEnd = (result) => {
    debugger;

    if (!result.destination) return;
    const { destination, source, draggableId } = result;
    const { droppableId: targetedBoardId, index } = destination;
    const { droppableId } = source;
    const targetedBoard = boards.find((b) => b.id === targetedBoardId);
    const sourceBoard = boards.find((b) => b.id === droppableId);
    let { items } = targetedBoard;
    const { items: sourceItems } = sourceBoard;
    const draggedItem = sourceItems.find((item) => item.id === draggableId);
    const notTheSameSource = targetedBoard.id !== sourceBoard.id;

    const newItems = reorder(
      sourceItems,
      result.source.index,
      result.destination.index
    );

    if (notTheSameSource) {
      items.splice(index, 0, draggedItem);
      editListCard(targetedBoard.id, items);
      editListCard(
        sourceBoard.id,
        newItems.filter((d) => d.id !== draggedItem.id)
      );
    } else {
      items = newItems;
      editListCard(sourceBoard.id, newItems);
    }
  };

  return (
    <Homecontext.Provider
      value={{ boards, editBoards, dragState, whoIsDragged, setWhoIsDragged }}
    >
      <div className="home ">
        <BoardHeader />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="boards-wrapper flex ">
            {boards.map((board) => (
              <Board
                key={uuidv4()}
                board={board}
                boards={boards}
                editBoards={editBoards}
              />
            ))}

            <AddBoard />
          </div>
        </DragDropContext>
      </div>
    </Homecontext.Provider>
  );
}
