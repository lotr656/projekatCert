import React from "react";
import { useState } from "react";
import EditModal from "../modals/editModal";

const EditButton = ({ value }) => {
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setEditModal(true)}
        style={{
          fontSize: 22,
          backgroundColor: "#5f98d4",
          marginLeft: 10,
          borderRadius: 8,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        Izmijeni
      </div>
      <EditModal
        isOpen={editModal}
        setIsOpen={setEditModal}
        item={value}
      ></EditModal>
    </>
  );
};

export default EditButton;
