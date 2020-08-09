import React from "react";
import "./index.scss";
import TrelloLogo from "./../../pages/home/components/trello-logo/index";
import Avatar from "./../../pages/home/components/avatar/index";
import ActionIcon from "./../../components/action-icon/index";
import {
  HomeOutlined,
  Add,
  Notifications,
  NotificationsOutlined,
  Info,
  InfoOutlined,
} from "@material-ui/icons";
import RightSide from "./components/right-side/index";
import CenterSide from "./components/center-side";
import LeftSide from "./components/left-side";

export default function Header(props) {
  return (
    <div className="header flex justify-between align-center">
      <LeftSide />
      <CenterSide />
      <RightSide />
    </div>
  );
}
