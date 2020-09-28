import React, { useContext, useState } from "react";
import { boardContext } from "./../../../../../../contexts/board/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "./../../../../../../utils/methods/array";
import "./index.css";
import { Homecontext } from "./../../../../../../contexts/home/index";

const CardList = React.memo((props) => {
  const { items: lists, editListCard, boardID } = props;
  const homeState = useContext(Homecontext);

  const onDragEnd = (result, col, setCols) => {
    // dropped outside the list
    // props.onDragEnd();
    debugger;
    if (!result.destination) {
      // props.onDragEnd(true);

      return;
    }
    const items = reorder(lists, result.source.index, result.destination.index);
    editListCard(items);
  };

  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId={boardID} direction="vertical">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className="list-cards-container"
          {...provided.droppableProps}
        >
          {lists.map((list, index) => (
            <Draggable key={list.id} draggableId={list.id} index={index}>
              {(provided) => (
                <div
                  onMouseDown={() => {
                    props.onDragStart(list.id);
                  }}
                  onMouseUpCapture={() => {
                    // props.onDragEnd(true);
                  }}
                  className="list-card"
                  ref={provided.innerRef}
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  style={{
                    userSelect: "none",
                    ...provided.draggableProps.style,
                  }}
                >
                  {list.text}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    // </DragDropContext>
  );
});

export default CardList;
// {lists.map((list) => (
//   <ListCard title={list.text} />
// ))}
