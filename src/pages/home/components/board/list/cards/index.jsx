import React, { useContext } from "react";
import { boardContext } from "./../../../../../../contexts/board/index";
import ListCard from "./../card/index";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "./../../../../../../utils/methods/array";
import "./index.css";

export default function CardList() {
  const boardState = useContext(boardContext);
  const { lists, editListCard } = boardState;
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

    const items = reorder(lists, result.source.index, result.destination.index);

    editListCard(items);
  };

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
                    className="list-card"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
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

    // <DragDropContext onDragEnd={onDragEnd}>
    //   <Droppable droppableId="droppable" direction="horizontal">
    //     {(provided, snapshot) => (
    //       <>
    //         {lists.map((list, index) => (
    //           <Draggable key={list.id} draggableId={list.id} index={index}>
    //             {(provided, snapshot) => (
    //               <div
    //                 ref={provided.innerRef}
    //                 {...provided.draggableProps}
    //                 {...provided.dragHandleProps}
    //               >
    //                 <ListCard title={list.text} />
    //               </div>
    //             )}
    //           </Draggable>
    //         ))}
    //         {provided.placeholder}
    //       </>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
}

// {lists.map((list) => (
//   <ListCard title={list.text} />
// ))}
