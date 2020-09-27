import React from "react";
import AddCard from "../list/add-card";
import { v4 as uuidv4 } from "uuid";

import "./index.scss";
import { useContext } from "react";
import { Homecontext } from "../../../../../contexts/home";

export default function AddBoard(props) {
  const homeState = useContext(Homecontext);
  const { editBoards, boards } = homeState;

  const handleSubmit = (value) => {
    let title = value;
    editBoards([...boards, { title, id: uuidv4(), items: [] }]);
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
