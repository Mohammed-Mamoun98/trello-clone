import React from "react";
import { HomeOutlined } from "@material-ui/icons";
import "./index.scss";

const Icon = (props) => {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });
  return <div>{childrenWithProps}</div>;
};

export default function ActionIcon(props) {
  return (
    <div className="icon-wrapper flex center">
      <Icon {...props} style={{ color: "#fff", ...props.style }}>
        {props.icon}
      </Icon>
    </div>
  );
}
