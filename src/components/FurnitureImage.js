import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FurnitureImage({ imgUrl, text }) {
  const [state, setState] = useState(false);

  function toggleActive() {
    setState((currentState) => !currentState);
  }

  function deactivate() {
    setState(false);
  }

  return (
    <div
      class="grid-item"
      className={state ? "grid-item active" : "grid-item"}
      onMouseLeave={deactivate}
      onMouseEnter={toggleActive}
    >
      <div className={state ? "active image-cover" : "image-cover"}>{text}</div>
      <Link to="/store">
        <img src={imgUrl} alt="couch" className={state ? "active" : null} />
      </Link>
      
      
    </div>
  );
}
