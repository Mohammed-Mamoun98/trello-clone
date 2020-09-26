import React from "react";
import "./index.scss";
import BoardHeader from "../board-header";
import List from "./list";
import { boardContext } from "./../../../../contexts/board/index";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Board(props) {
  const [lists, setLists] = useState([]);
  const id = props;

  const addListCard = (text) => {
    setLists([...lists, { text, id: uuidv4(), boardID: props.id }]);
  };

  const editListCard = (newList) => {
    setLists([...newList]);
  };

  return (
    <boardContext.Provider value={{ lists, addListCard, editListCard, id }}>
      <div className="list-container flex" draggable>
        <List title={props.title} />
      </div>
    </boardContext.Provider>
  );
}
