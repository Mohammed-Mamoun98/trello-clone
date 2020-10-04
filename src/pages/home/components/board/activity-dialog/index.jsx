import { DialogTitle } from "@material-ui/core";
import React from "react";
import Dialog from "./../../../../../components/dialog/index";

export default function ActivityDialog(props) {
  const { open, card, onClose } = props;
  if (!card) return null;
  const { title } = card;
  return (
    <>
      <Dialog open={open} title={title} onClose={onClose}>
        hello
      </Dialog>
    </>
  );
}
