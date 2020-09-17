import React from "react";
import "./index.scss";
import Board from "./components/board";
import BoardHeader from "./components/board-header";
import AddCard from "./components/board/list/add-card";

export default function Home() {
  return (
    <div className="home">
      <BoardHeader />
      <div className="boards-wrapper flex ">
        <Board />
        <Board />
        <Board />
      </div>
    </div>
  );
}
