import { DialogTitle } from "@material-ui/core";
import React from "react";
import Dialog from "./../../../../../components/dialog/index";

export default function ActivityDialog(props) {
  const { open, title } = props;
  return (
    <>
      <Dialog open={open} title={title}>
        hello
      </Dialog>
    </>
  );
}
