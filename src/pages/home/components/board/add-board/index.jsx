import React from "react";
import AddCard from "../list/add-card";
import { v4 as uuidv4 } from "uuid";
import "./index.scss";
import { addBoard } from "./../../../../../redux/actions/shared";
import { useDispatch } from "react-redux";

export default function AddBoard(props) {
  const { editBoards, boards } = props;
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    let title = value;

    dispatch(addBoard(title));
    const id = uuidv4();
    editBoards([
      ...boards,
      { title, id, items: [{ hidden: true, id: uuidv4(), boardID: id }] },
    ]);
  };

  return (
    <AddCard
      title="Add another list"
      style={{ color: "#fff", margin: "4px 0" }}
      containerStyle={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        height: "fit-content",
        minWidth: "272px",
        padding: "4px 0px",
        padding: "0px",
        borderRadius: "3px",
      }}
      onSubmit={handleSubmit}
    />
  );
}
