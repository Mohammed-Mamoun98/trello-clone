import { ClickAwayListener } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./index.scss";

export default function EditableText(props) {
  const { value, onSubmit , placeholder } = props;
  console.log({value});
  const inputRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const enableEdit = () => {
    setEditMode(true)
  };
  const disableEdit = () => {
    setEditMode(false)
  };

  const toggleEditMode = () => {
    editMode ? disableEdit() : enableEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (inputRef.current) inputRef.current.blur();
    onSubmit(inputValue);
    setEditMode(false)
  };

  const hadnleChange = (e) => {
    const {
      target: { value: _value },
    } = e;
    setInputValue(_value);
  };


  const formClass = editMode ? 'editable-wrapper' : 'editable'
  const formClasses = formClass + ' '+ props?.className || ''

  return (
    <>
      <ClickAwayListener onClickAway={disableEdit}>
        <form onSubmit={handleSubmit} className={formClasses}>
          {!editMode && <div onClick={toggleEditMode}>{value}</div>}
          {editMode  && (
            <input
              ref={inputRef}
              onChange={hadnleChange}
              value={inputValue}
              className="editable bold-text"
              placeholder={props?.placeholder || 'add a placeholder'}
            />
          )}
        </form>
      </ClickAwayListener>
    </>
  );
}
