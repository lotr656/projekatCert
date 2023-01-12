import React from "react";

const Header = ({ child }) => {
  return (
    <>
      <div>
        <div>{child}</div>
        <div
          style={{
            textAlign: "center",
            fontSize: 26,
            backgroundColor: "lightblue",
          }}
        >
          Lista Vozila
        </div>
      </div>
    </>
  );
};
export default Header;
