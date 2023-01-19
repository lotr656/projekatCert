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

  let submitCheck = true;

  const [fireErrorMarka, setFireErrorMarka] = useState(false);
  const [fireErrorModel, setFireErrorModel] = useState(false);

  const validationCheck = () => {
    if (!markaVozila || markaVozila.length === 0) {
      submitCheck = false;
    } else if (!model || model.length === 0) {
      submitCheck = false;
    }

    if (!markaVozila || markaVozila.length === 0) {
      setFireErrorMarka(true);
    }
    if (!model || model.length === 0) {
      setFireErrorModel(true);
    }
  };

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
  };
  const handleSubmit = (event) => {
    setFireErrorMarka(false);
    setFireErrorModel(false);
    event.preventDefault();
    validationCheck();
    if (submitCheck) {
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
    } else {
      alert("Podaci nisu validni");
    }
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
                      placeholder="Audi, BMW..."
                      value={markaVozila ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setMarkaVozila(e.target.value);
                        }
                      }}
                    />
                  </div>
                  {markaVozila.length === 0 ? (
                    <span className="validation_error">
                      Ovo polje je obavezno!
                    </span>
                  ) : fireErrorMarka ? (
                    <span className="validation_error">
                      Ovo polje je obavezno!
                    </span>
                  ) : null}
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Model:</label>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="A4, Golf, F10..."
                      value={model ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setModel(e.target.value);
                        }
                      }}
                    />
                  </div>
                  {model.length === 0 ? (
                    <span className="validation_error">
                      Ovo polje je obavezno!
                    </span>
                  ) : fireErrorModel ? (
                    <span className="validation_error">
                      Ovo polje je obavezno!
                    </span>
                  ) : null}
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Godiste:</label>
                    <input
                      className="input_style"
                      type="number"
                      placeholder="Godina proizvodnje"
                      value={godiste ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setGodiste(e.target.value);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Registracijska oznaka:</label>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="U formatu A00-A-000"
                      value={registracijskaOznaka ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setRegistracijskaOznaka(e.target.value);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Registracija vazi do:</label>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="U formatu 01-Januar-2000"
                      value={registracijaVaziDo ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setRegistracijaVaziDo(e.target.value);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Boja:</label>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="Crna, Plava, Siva..."
                      value={boja ?? ""}
                      onChange={(e) => {
                        if (e.target.value !== " ") {
                          setBoja(e.target.value);
                        }
                      }}
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
