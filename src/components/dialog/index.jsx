import {
  DialogTitle,
  Dialog as _Dialog,
  DialogContent,
} from "@material-ui/core";
import React from "react";

export default function Dialog(props) {
  const { title } = props;

  return (
    <>
      <_Dialog {...props}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>{props.children}</DialogContent>
      </_Dialog>
    </>
  );
}
