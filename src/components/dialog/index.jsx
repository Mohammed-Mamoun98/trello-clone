import {
  DialogTitle,
  Dialog as _Dialog,
  DialogContent,
} from "@material-ui/core";
import React from "react";
import { theme } from "./../../Theme/theme";

export default function Dialog(props) {
  const { title } = props;
  const { dialog } = theme;
  return (
    <>
      <_Dialog {...props} fullWidth maxWidth="md">
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent style={{ ...dialog, minHeight: "50vh" }}>
          {props.children}
        </DialogContent>
      </_Dialog>
    </>
  );
}
