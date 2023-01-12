import React from "react";

const AddButton = () => {
  const printClick = () => {
    console.log("click");
  };
  return (
    <>
      <div
        onClick={printClick}
        style={{
          position: "absolute",
          fontSize: 22,
          backgroundColor: "coral",
          marginLeft: 10,
          borderRadius: 8,
        }}
      >
        Add
      </div>
    </>
  );
};

export default AddButton;
