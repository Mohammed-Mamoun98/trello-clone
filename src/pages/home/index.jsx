import React, { useContext } from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import { Homecontext } from "./../../contexts/home/index";
import { useState } from "react";
import AddBoard from "./components/board/add-board/index";
import { useEffect } from "react";

export default function Home() {
  const [boards, setBoards] = useState([]);
  const editBoards = (newBoards) => setBoards(newBoards);

  return (
    <Homecontext.Provider value={{ boards, editBoards }}>
      <div className="home ">
        <BoardHeader />
        <div className="boards-wrapper flex ">
          <>
            {boards.map((board) => (
              <Board
                title={board.title}
                id={board.id}
                items={board?.items || []}
              />
            ))}
          </>
          <AddBoard />
        </div>
      </div>
    </Homecontext.Provider>
  );
}
