import React, { useContext, useEffect, useRef, useState } from "react";
import "./index.scss";
import { Add } from "@material-ui/icons";
import {
  Paper,
  InputBase,
  ClickAwayListener,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import { boardContext } from "./../../../../../../contexts/board/index";

const AddCard = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");

  const boardState = useContext(boardContext);

  const { addListCard } = boardState;
  const inputRef = useRef(null);

  const editOff = () => {
    setEditMode(false);
  };

  const editOn = () => {
    setEditMode(true);
  };
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addListCard(value);
    setEditMode(false);
  };

  useEffect(() => {
    editMode && inputRef.current.focus();
  }, [editMode]);

  return (
    <ClickAwayListener onClickAway={editOff}>
      <div className="add-card" onClick={editOn}>
        {!editMode && (
          <div className="add-card-container flex align-center">
            <Add style={{ fontSize: "19px", marginRight: "4px" }} />
            <h5 className="">Add another card</h5>
          </div>
        )}
        {editMode && (
          <form onSubmit={handleSubmit}>
            <Paper style={{ padding: "4px 8px", minHeight: "66px" }}>
              <InputBase
                placeholder="input here..."
                fullWidth
                inputRef={inputRef}
                onChange={handleChange}
              />
            </Paper>
          </form>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default AddCard;
