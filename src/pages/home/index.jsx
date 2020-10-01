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
import { handleDragEnd } from "../../utils/methods/drag-methods";

export default function Home() {
  const [boards, setBoards] = useState([
    { title: "hello", id: uuidv4(), items: [{ hidden: true, id: uuidv4() }] },
  ]);
  const allCards = boards.map((b) => b.items).flat();

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

  const changeBoardName = (id, newName) => {
    debugger;
    const newBoards = boards.map((board) => {
      if (board.id === id) {
        return {
          ...board,
          title: newName,
        };
      } else return board;
    });

    editBoards([...newBoards]);
  };

  const onDragEnd = (result) => {
    handleDragEnd(result, boards, allCards, editListCard);
  };

  return (
    <Homecontext.Provider value={{ boards, editBoards, changeBoardName }}>
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
