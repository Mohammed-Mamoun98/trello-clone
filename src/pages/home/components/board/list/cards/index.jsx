import React, { useContext } from "react";
import { boardContext } from "./../../../../../../contexts/board/index";
import ListCard from "./../card/index";

export default function CardList() {
  const boardState = useContext(boardContext);
  const { lists } = boardState;
  return (
    <>
      {lists.map((list) => (
        <ListCard title={list.text} />
      ))}
    </>
  );
}
