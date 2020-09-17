import React from "react";
import "./index.scss";
import BoardHeader from "../board-header";
import List from "./list";
import { boardContext } from "./../../../../contexts/board/index";
import { useState } from "react";

export default function Board(props) {
  const [lists, setLists] = useState([]);

  const addListCard = (text) => {
    setLists([...lists, { text }]);
  };

  return (
    <boardContext.Provider value={{ lists, addListCard }}>
      <div className="list-container flex">
        <List />
      </div>
    </boardContext.Provider>
  );
}
