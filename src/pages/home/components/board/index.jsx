import React from "react";
import "./index.scss";
import List from "./list";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { _addListCard } from "../../../../redux/actions/shared";

export default function Board(props) {
  const { board } = props;
  const { id, title, items } = board;

  return (
    <div className="list-container flex">
      <List
        board={board}
        key={uuidv4()}
        title={title}
        items={items}
        boardID={id}
      />
    </div>
  );
}
