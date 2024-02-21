import React from 'react'
import { Link } from "react-router-dom";

const ClassroomCardItem = (props) => {
  return (
    <>
      <li className="classroom-cards--item">
        <Link className="classroom-cards--item--link" to={props.path}>
          <figure className="classroom-cards--item--pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Class photo" className="cards--item--img" />
          </figure>
          <div className="classroom-cards--item--info">
            <h5 className="classroom-cards--item--text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ClassroomCardItem