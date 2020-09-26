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
import { PropTypes } from "prop-types";

const AddCard = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("");
  const boardState = useContext(boardContext);
  const { id } = boardState;

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
    props.onSubmit(value);
    setEditMode(false);
  };

  useEffect(() => {
    editMode && inputRef.current.focus();
  }, [editMode]);

  return (
    <ClickAwayListener onClickAway={editOff}>
      <div
        className="add-card"
        onClick={editOn}
        style={{ ...props.containerStyle }}
      >
        {!editMode && (
          <div className="add-card-container flex align-center">
            <Add
              style={{ fontSize: "19px", marginRight: "4px", ...props.style }}
            />
            <h5 className="" style={{ ...props.style }}>
              {props.title}
            </h5>
          </div>
        )}
        {editMode && (
          <form onSubmit={handleSubmit}>
            <Paper
              style={{
                padding: "4px 8px",
                minHeight: "66px",
              }}
            >
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

AddCard.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
};

export default AddCard;
