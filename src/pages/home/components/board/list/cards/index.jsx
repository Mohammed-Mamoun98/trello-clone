import React, { useContext, useState } from "react";
import { boardContext } from "./../../../../../../contexts/board/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "./../../../../../../utils/methods/array";
import "./index.css";
import { Homecontext } from "./../../../../../../contexts/home/index";

export default function CardList(props) {
  const { items: lists, editListCard } = props;
  const [isHovered, setIsHoverd] = useState(false);
  const homeState = useContext(Homecontext);
  const { dragState } = homeState;
  console.log({ dragState });
  const { changeDragState, whoIsDragged } = dragState;

  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    display: "block",
    // padding: grid,
    overflow: "auto",
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // changeDragState(false);

    const items = reorder(lists, result.source.index, result.destination.index);
    editListCard(items);
  };

  const onDragStart = () => {
    changeDragState(true);
  };

  const onMouseLeave = () => {
    setIsHoverd(false);
    changeDragState(false);
  };

  console.log({ isHovered });
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
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
                    // onMouseEnter={onDragStart}
                    // onMouseLeave={onMouseLeave}
                    // onMouseEnter={() => {
                    //   setIsHoverd(true);
                    // }}
                    className="list-card"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    // style={{ marginTop: isHovered && whoIsDragged && whoIsDragged !== id  ? "8px" : "0px" }}
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
    </DragDropContext>
  );
}

// {lists.map((list) => (
//   <ListCard title={list.text} />
// ))}
