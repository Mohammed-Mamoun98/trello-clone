import React from "react";
import { Paper, CardActionArea } from "@material-ui/core";
import { theme } from "./../add-card/style";
import { PropTypes } from "prop-types";

export default function ListCard(props) {
  return (
    <CardActionArea style={theme.listCardContainer}>
      <Paper style={theme.listCardContent}>{props.title}</Paper>
    </CardActionArea>
  );
}
ListCard.propTypes = {
  title: PropTypes.string.isRequired,
};
