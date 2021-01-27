import React from "react";
import "./Date.css";
import Moment from "react-moment";

export default function FormattedDate(props) {
  const dateToFormat = props.date;

  return <Moment format="dddd h:mm A">{dateToFormat}</Moment>;
}
