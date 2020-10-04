import React, { useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Homecontext } from "../../../../../../contexts/home";
import "./index.css";

const CardList = React.memo((props) => {
  const { items: lists } = props;
  const homeState = useContext(Homecontext);
  const { handleToggleDialog, setDialogInfo } = homeState;
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

  const handleClick = (id) => {
    setDialogInfo(id);
    //open dialog
  };
  return (
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
                    onClick={() => handleClick(list.id)}
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
  );
});

export default CardList;
