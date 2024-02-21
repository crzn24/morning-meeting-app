import React from 'react'
import { Link } from "react-router-dom";

// originally passes in props only 
const ClassroomCardItem = ({ src, text, label, path, onClick }) => {
  return (
    <>
      <li className="classroom-cards--item">
        <Link className="classroom-cards--item--link" to={path} onClick={onClick}>
          <figure className="classroom-cards--item--pic-wrap" data-category={label}>
            <img src={src} alt="Class photo" className="cards--item--img" />
          </figure>
          <div className="classroom-cards--item--info">
            <h5 className="classroom-cards--item--text">{text}</h5>
          </div>
        </Link>
      </li>
      {/* <li className="classroom-cards--item">
        <Link className="classroom-cards--item--link" to={props.path} onClick={onClick}>
          <figure className="classroom-cards--item--pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Class photo" className="cards--item--img" />
          </figure>
          <div className="classroom-cards--item--info">
            <h5 className="classroom-cards--item--text">{props.text}</h5>
          </div>
        </Link>
      </li> */}
    </>
  )
}

export default ClassroomCardItem