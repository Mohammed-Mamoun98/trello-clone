import React, { useContext } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { Homecontext } from "../../../../../../contexts/home";
import "./index.css";
import { setDialigItem } from "./../../../../../../redux/actions/shared";

const CardList = React.memo((props) => {
  const dispatch = useDispatch();
  const { items } = props;

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

  const handleClick = (item) => {
    dispatch(setDialigItem(item));
  };
  return (
    <>
      {items.map((item, index) => (
        <Droppable droppableId={item.id} direction="vertical">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className="list-cards-container"
              {...provided.droppableProps}
            >
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    onClick={() => handleClick(item)}
                    className="list-card"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    style={{
                      userSelect: "none",
                      ...provided.draggableProps.style,
                      ...hiddenStyle(item.hidden),
                    }}
                  >
                    {item?.text}
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
