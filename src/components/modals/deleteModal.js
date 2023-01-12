import React, { useState } from "react";

const DeleteModal = ({ isOpen, setIsOpen, item }) => {
  const [markaVozila] = useState(item.markaVozila);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Vozilo ${markaVozila} je uspjesno obrisano iz baze`);
    setIsOpen(false);
  };

  const cancelAction = () => {
    setIsOpen(false);
    console.log("cancel");
  };
  if (isOpen) {
    return (
      <div
        className="modal_main"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="modal_container">
          <div className="modal_header">
            <div className="modal_header_title">Potvrdite brisanje vozila</div>
            <div className="modal_header_close" onClick={cancelAction}>
              X
            </div>
          </div>
          <div className="modal_dialog_delete">
            <div className="modal_dialog_delete_text">
              Da li ste sigurni da zelite obrisati vozilo {item.markaVozila},{" "}
              {item.model} iz baze?
            </div>
          </div>
          <div className="modal_footer">
            <div className="modal_footer_delete" onClick={handleSubmit}>
              Obrisi
            </div>
            <div className="modal_footer_cancel" onClick={cancelAction}>
              Ponisti
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DeleteModal;
