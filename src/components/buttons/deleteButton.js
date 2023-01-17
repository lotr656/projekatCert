import React from "react";
import DeleteModal from "../modals/deleteModal";
import { useState } from "react";

const DeleteButton = ({ value, deleteAction }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setDeleteModal(true)}
        style={{
          fontSize: 22,
          backgroundColor: "#d45f5f",
          marginLeft: 10,
          borderRadius: 8,
          paddingLeft: 5,
          paddingRight: 5,
          cursor: "pointer",
        }}
      >
        Obrisi
      </div>
      <DeleteModal
        isOpen={deleteModal}
        setIsOpen={setDeleteModal}
        item={value}
        deleteAction={deleteAction}
      />
    </>
  );
};

export default DeleteButton;
