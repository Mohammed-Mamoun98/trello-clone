import { ClickAwayListener } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./index.scss";

export default function EditableText(props) {
  const { value, onSubmit, boardID } = props;
  const inputRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const enableEdit = () => setEditMode(true);
  const disableEdit = () => setEditMode(false);

  const toggleEditMode = () => {
    editMode ? disableEdit() : enableEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    props.onSubmit(boardID, inputValue);
  };

  const hadnleChange = (e) => {
    const {
      target: { value: _value },
    } = e;
    setInputValue(_value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [editMode]);
  return (
    <>
      <ClickAwayListener onClickAway={disableEdit}>
        <form onSubmit={handleSubmit}>
          {!editMode && <div onClick={toggleEditMode}>{inputValue}</div>}
          {editMode && (
            <input
              ref={inputRef}
              onChange={hadnleChange}
              value={inputValue}
              className="editable"
            />
          )}
        </form>
      </ClickAwayListener>
    </>
  );
}
