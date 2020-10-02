import React, { useContext, useState } from "react";
import "./index.scss";
import { MoreHoriz } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import ListCard from "./card/index";
import AddCard from "./add-card";
import { boardContext } from "./../../../../../contexts/board/index";
import CardList from "./cards/index";
import { Homecontext } from "./../../../../../contexts/home/index";
import { Droppable } from "react-beautiful-dnd";
import EditableText from "../../../../../components/editable-text";

export default function List(props) {
  const { items, addListCard, title, boardID } = props;
  const homeState = useContext(Homecontext);
  const { changeBoardName } = homeState;

  const handleSubmit = (value) => {
    addListCard(value);
  };

  const handleBoardNameChange = (newName) => {
    changeBoardName(boardID, newName);
  };
  return (
    <div className="list">
      <div className="list-header flex  center justify-between">
        <EditableText value={title} onSubmit={handleBoardNameChange} />
        <IconButton size="small">
          <MoreHoriz style={{ color: "#172b3d", fontSize: "16px" }} />
        </IconButton>
      </div>
      <CardList items={items} />
      <AddCard title="Add another card" onSubmit={handleSubmit} />
    </div>
  );
}
