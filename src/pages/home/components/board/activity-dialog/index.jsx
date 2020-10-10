import { DialogTitle, Icon } from "@material-ui/core";
import React from "react";
import Dialog from "./../../../../../components/dialog/index";
import { Close } from "@material-ui/icons";
import { theme } from "./../../../../../Theme/theme";

export default function ActivityDialog(props) {
  const { item, onClose } = props;
  if (!item) return null;
  const { title } = item;

  return (
    <>
      <Dialog open={item} title={title} onClose={onClose} hasTransition>
        <div className="dialog-header flex justify-between">
          <div className="">{title}</div>
          <div className="">
            <Close onClick={onClose} style={theme.icon} />
          </div>
        </div>
      </Dialog>
    </>
  );
}
