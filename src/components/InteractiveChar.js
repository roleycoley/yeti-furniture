import React, { useState, useEffect } from "react";

export default function InteractiveLetter({ character, placement }) {
  const [state, setState] = useState(true);

  function toggleActive() {
    setState((currentState) => !currentState);
  }

  function deactivate() {
    setState(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false);
    }, placement * 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={state ? "character active" : "character"}
      onMouseLeave={deactivate}
      onMouseEnter={toggleActive}
      style={{display:'inline-block'}}
    >
      {character}
    </div>
  );
}
