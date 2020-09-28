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

export default function List(props) {
  const { items, addListCard, editListCard, title, boardID } = props;
  const [draggedId, setDraggedId] = useState("");

  const homeState = useContext(Homecontext);
  const { editBoards, boards } = homeState;

  console.log({ draggedId });
  const onDragStart = (id) => {
    setDraggedId(id);
  };

  const onDragEnd = (remove) => {
    const found = items.find((item) => item.id === draggedId);
    const currentBoard = boards.find((board) => board.id === boardID);
    const deletedCardFromBoard = {
      ...currentBoard,
      items: currentBoard.items.filter((card) => card.id !== draggedId),
    };

    const newBoards = boards.map((board) => {
      if (board.id === boardID) return deletedCardFromBoard;
      else return board;
    });

    if (remove) {
      // alert(JSON.stringify(deletedCardFromBoard));
    }
    // setWhoIsDragged(id);
    if (found && remove) editBoards(newBoards);
    setDraggedId("");
  };

  const handleRemove = () => {};

  const handleSubmit = (value) => {
    addListCard(value);
  };
  return (
    <div className="list">
      <div className="list-header flex  center justify-between">
        <div className="">{title}</div>
        <IconButton size="small">
          <MoreHoriz style={{ color: "#172b3d", fontSize: "16px" }} />
        </IconButton>
      </div>

      <CardList
        items={items}
        editListCard={editListCard}
        onDragEnd={onDragEnd}
        onDragStart={onDragStart}
        boardID={boardID}
      />
      <Droppable droppableId={boardID} direction="vertical">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="list-cards-container"
            {...provided.droppableProps}
          >
            <div className="">
              <AddCard title="Add another card" onSubmit={handleSubmit} />
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}
