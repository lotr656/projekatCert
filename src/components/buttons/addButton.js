import React, { useState } from "react";
import AddModal from "../modals/addModal";

const AddButton = ({ expandData }) => {
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setAddModal(true)}
        style={{
          //position: "absolute",
          fontSize: 22,
          backgroundColor: "coral",
          marginLeft: 10,
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Dodaj vozilo
      </div>
      <AddModal
        isOpen={addModal}
        setIsOpen={setAddModal}
        addData={expandData}
      />
    </>
  );
};

export default AddButton;
