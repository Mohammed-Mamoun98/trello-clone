import React from "react";
import { HomeOutlined } from "@material-ui/icons";
import ActionIcon from "./../../../../components/action-icon/index";

export default function LeftSide(props) {
  return (
    <div className="left-side">
      <ActionIcon
        color="white"
        icon={<HomeOutlined style={{ color: "#fff" }} />}
      />
    </div>
  );
}
