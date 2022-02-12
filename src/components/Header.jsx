import React from "react";

const Header = (props) => {
  return (
    <div>
      <span style={{ fontSize: 30, margin: 5 }}>
        <b>{props.title}</b>
      </span>
      <button
        onClick={() => window.open("https://google.com")}
        style={{ margin: 5 }}
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
};

export default Header;
