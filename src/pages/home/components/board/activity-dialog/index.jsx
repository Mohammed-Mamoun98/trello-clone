import { DialogTitle, Icon } from "@material-ui/core";
import React from "react";
import Dialog from "./../../../../../components/dialog/index";
import { Close, ViewAgenda, Notes, List } from "@material-ui/icons";
import { theme } from "./../../../../../Theme/theme";
import "./index.scss";
import { useEffect } from "react";
import Description from "./description/index";
import Activity from "./activity/index";

export default function ActivityDialog(props) {
  const { item, onClose } = props;
  if (!item) return null;
  const { text } = item;

  return (
    <>
      <Dialog
        open={false}
        onClose={onClose}
        hasTransition
        dialogStyle={{ backgroundColor: "#F4F5F7" }}
      >
        <div className="dialog-container">
          <div className="dialog-header flex justify-between">
            <div className="flex align-center">
              <ViewAgenda style={theme.dilogIcon} />
              <h4>{text}</h4>
            </div>
            <div>
              <Close onClick={onClose} style={theme.icon} />
            </div>
          </div>
          <div className="in-list">in list done</div>
          <Description />
          <Activity />
        </div>
      </Dialog>
    </>
  );
}
