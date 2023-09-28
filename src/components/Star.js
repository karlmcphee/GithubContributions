import React from 'react'
import { StarFill } from 'react-bootstrap-icons';
import "../components/css/App.css";


const Star = props => {
  return (
    <div>{props.topPerformer !== "" ? <div><StarFill color="gold" size={16}/>{props.topPerformer}</div> : "No commits registered."}</div>
  )
}

export default Star