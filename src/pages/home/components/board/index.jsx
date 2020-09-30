import React from "react";
import "./index.scss";
import List from "./list";
import { v4 as uuidv4 } from "uuid";

export default function Board(props) {
  const { editBoards, board, boards } = props;
  const { id, title, items } = board;

  console.log({ boards });

  const addListCard = (text) => {
    const newCard = { text, id: uuidv4(), boardID: id };
    const newBoardItems = [...board.items, newCard];
    editListCard(newBoardItems);
  };

  const editListCard = (newList) => {
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

  return (
    <div className="list-container flex">
      <List
        key={uuidv4()}
        title={title}
        addListCard={addListCard}
        items={items}
        editListCard={editListCard}
        boardID={id}
      />
    </div>
  );
}
