import React from "react";
import ActionIcon from "../../../../components/action-icon";
import { NotificationsOutlined, InfoOutlined, Add } from "@material-ui/icons";
import Avatar from "../../../../pages/home/components/avatar";

export default function RightSide(props) {
  return (
    <div className="right-side flex center">
      <ActionIcon size="small" color="white" icon={<Add />} />
      <ActionIcon color="white" icon={<InfoOutlined />} />
      <ActionIcon
        color="white"
        icon={<NotificationsOutlined style={{ fontSize: "14px" }} />}
      />
      <Avatar />
    </div>
  );
}
