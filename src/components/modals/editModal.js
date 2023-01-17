import React from "react";
import { useState } from "react";
import "../../styles/modal_basic.css";

const EditModal = ({ isOpen, setIsOpen, item, editAction }) => {
  const oldMarkaVozila = item.markaVozila;
  const oldModel = item.model;
  const oldGodiste = item.godiste;
  const oldRegistracijskaOznaka = item.registracijskaOznaka;
  const oldRegistracijaVaziDo = item.registracijaVaziDo;
  const oldBoja = item.boja;

  const [markaVozila, setMarkaVozila] = useState(item.markaVozila);
  const [model, setModel] = useState(item.model);
  const [godiste, setGodiste] = useState(item.godiste);
  const [registracijskaOznaka, setRegistracijskaOznaka] = useState(
    item.registracijskaOznaka
  );
  const [registracijaVaziDo, setRegistracijaVaziDo] = useState(
    item.registracijaVaziDo
  );
  const [boja, setBoja] = useState(item.boja);

  const revertChanges = () => {
    setMarkaVozila(oldMarkaVozila);
    setModel(oldModel);
    setGodiste(oldGodiste);
    setRegistracijskaOznaka(oldRegistracijskaOznaka);
    setRegistracijaVaziDo(oldRegistracijaVaziDo);
    setBoja(oldBoja);
  };

  const cancelAction = () => {
    revertChanges();
    setIsOpen(false);
    console.log("cancel");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    editAction(
      item.id,
      godiste,
      markaVozila,
      model,
      registracijskaOznaka,
      registracijaVaziDo,
      boja
    );
    alert(`Podaci uspjesno izmijenjeni za vozilo: ${markaVozila}`);
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
            <div className="modal_header_title">
              Izmjena podataka za vozilo: {item.markaVozila}, {item.model}
            </div>
            <div className="modal_header_close" onClick={cancelAction}>
              X
            </div>
          </div>
          <div className="modal_dialog">
            <form>
              <div className="form_style">
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Marka vozila:</label>
                    <input
                      className="input_style"
                      type="text"
                      value={markaVozila}
                      onChange={(e) => setMarkaVozila(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Model:</label>
                    <input
                      className="input_style"
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Godiste:</label>
                    <input
                      className="input_style"
                      type="number"
                      value={godiste}
                      onChange={(e) => setGodiste(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Registracijska oznaka:</label>
                    <input
                      className="input_style"
                      type="text"
                      value={registracijskaOznaka}
                      onChange={(e) => setRegistracijskaOznaka(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Registracija vazi do:</label>
                    <input
                      className="input_style"
                      type="text"
                      value={registracijaVaziDo}
                      onChange={(e) => setRegistracijaVaziDo(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Boja:</label>
                    <input
                      className="input_style"
                      type="text"
                      value={boja}
                      onChange={(e) => setBoja(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal_footer">
            <div className="modal_footer_save" onClick={handleSubmit}>
              Sacuvaj
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

export default EditModal;
