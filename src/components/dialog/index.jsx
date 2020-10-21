import {
  DialogTitle,
  Dialog as _Dialog,
  DialogContent,
} from "@material-ui/core";
import React, { forwardRef } from "react";
import { theme } from "./../../Theme/theme";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialog(props) {
  const { title, hasTransition } = props;
  const { dialog } = theme;

  const TransitionComponent = hasTransition
    ? {
        TransitionComponent: Transition,
      }
    : null;
  return (
    <_Dialog {...props} fullWidth maxWidth="md" {...TransitionComponent}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent style={{ ...dialog, minHeight: "50vh" , ...props.dialogStyle }}>
        {props.children}
      </DialogContent>
    </_Dialog>
  );
}
