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
import {
  _addListCard,
  _editBoardName,
} from "../../../../../redux/actions/shared";
import { useDispatch } from "react-redux";

export default function List(props) {
  const dispatch = useDispatch();
  const { items, title, boardID, board } = props;

  const handleSubmit = (text) => {
    dispatch(_addListCard(text, board));
  };

  const handleBoardNameChange = (newName) => {
    dispatch(_editBoardName(boardID, newName));
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
