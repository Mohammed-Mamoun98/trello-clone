import React from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import { Homecontext } from "./../../contexts/home/index";
import { useState } from "react";
import AddBoard from "./components/board/add-board/index";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [boards, setBoards] = useState([
    { title: "hello", id: uuidv4(), items: [] },
  ]);
  const [isDraging, setIsDraging] = useState(false);

  const changeDragState = (state) => setIsDraging(state);

  const dragState = {
    isDraging,
    changeDragState,
    whoIsDragged: "",
  };
  const editBoards = (newBoards) => setBoards(newBoards);

  return (
    <Homecontext.Provider value={{ boards, editBoards, dragState }}>
      <div className="home ">
        <BoardHeader />
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
      </div>
    </Homecontext.Provider>
  );
}
