import React, { useContext, useState } from "react";
import { boardContext } from "./../../../../../../contexts/board/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "./../../../../../../utils/methods/array";
import "./index.css";
import { Homecontext } from "./../../../../../../contexts/home/index";

const CardList = React.memo((props) => {
  const { items: lists } = props;

  const hiddenStyle = (isHidden) => {
    let style = isHidden
      ? {
          maxHeight: isHidden ? "0px" : "",
          padding: isHidden ? "0px" : "",
          margin: isHidden ? "0.1rem 0" : "",
        }
      : {};
    return style;
  };
  return (
    // <DragDropContext onDragEnd={onDragEnd}>
    <>
      {lists.map((list, index) => (
        <Droppable droppableId={list.id} direction="vertical">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className="list-cards-container"
              {...provided.droppableProps}
            >
              <Draggable key={list.id} draggableId={list.id} index={index}>
                {(provided) => (
                  <div
                    className="list-card"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={{
                      userSelect: "none",
                      ...provided.draggableProps.style,
                      ...hiddenStyle(list.hidden),
                    }}
                  >
                    {list?.text}
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </>
    // </DragDropContext>
  );
});

export default CardList;
