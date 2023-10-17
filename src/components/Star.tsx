import React from 'react'
import { StarFill } from 'react-bootstrap-icons';
import "../components/css/App.css";

interface ChildComponentProps {
  topPerformer?: any;
}

const Star = ({topPerformer}: ChildComponentProps)=> {
  console.log("test")
  console.log(topPerformer?.length)
  return (
    <div>{topPerformer !== "" ? <div><StarFill color="gold" size={16}/>{topPerformer}</div> : "No commits registered."}</div>
  )
}

export default Star