import React from "react";
import Moment from "react-moment";
import "./FormattedDate.css";

export default function FormattedDate(props) {
  const dateToFormat = props.date;

  return (
    <Moment className="Date" format="dddd h:mm A">
      {dateToFormat}
    </Moment>
  );
}
