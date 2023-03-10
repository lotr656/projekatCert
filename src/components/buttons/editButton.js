import React from "react";
import { useState } from "react";
import EditModal from "../modals/editModal";

const EditButton = ({ value, editAction }) => {
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
          cursor: "pointer",
        }}
      >
        Izmijeni
      </div>
      <EditModal
        isOpen={editModal}
        setIsOpen={setEditModal}
        item={value}
        editAction={editAction}
      ></EditModal>
    </>
  );
};

export default EditButton;
