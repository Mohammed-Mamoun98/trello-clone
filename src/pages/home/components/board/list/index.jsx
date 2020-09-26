import React, { useContext } from "react";
import "./index.scss";
import { MoreHoriz } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import ListCard from "./card/index";
import AddCard from "./add-card";
import { boardContext } from "./../../../../../contexts/board/index";
import CardList from "./cards/index";

export default function List(props) {
  const iconColor = "rgb(180,186,197)";
  const boardState = useContext(boardContext);
  const { addListCard } = boardState;

  const handleSubmit = (value) => {
    addListCard(value);
  };
  return (
    <div className="list">
      <div className="list-header flex  center justify-between">
        <div className="">{props.title}</div>
        <IconButton size="small">
          <MoreHoriz style={{ color: "#172b3d", fontSize: "16px" }} />
        </IconButton>
      </div>

      <CardList />
      <AddCard title="Add another card" onSubmit={handleSubmit} />
    </div>
  );
}
