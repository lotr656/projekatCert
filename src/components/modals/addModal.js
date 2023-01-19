import React, { useState } from "react";

import "../../styles/modal_basic.css";

const AddModal = ({ isOpen, setIsOpen, addData }) => {
  const [markaVozila, setMarkaVozila] = useState(undefined);
  const [model, setModel] = useState(undefined);
  const [godiste, setGodiste] = useState(undefined);
  const [registracijskaOznaka, setRegistracijskaOznaka] = useState(undefined);
  const [registracijaVaziDo, setRegistracijaVaziDo] = useState(undefined);
  const [boja, setBoja] = useState(undefined);

  const resetForm = () => {
    setGodiste(undefined);
    setMarkaVozila(undefined);
    setModel(undefined);
    setRegistracijskaOznaka(undefined);
    setRegistracijaVaziDo(undefined);
    setBoja(undefined);
    setFireErrorMarka(false);
    setFireErrorModel(false);
  };

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

  const handleSubmit = (event) => {
    setFireErrorMarka(false);
    setFireErrorModel(false);
    event.preventDefault();
    validationCheck();
    if (submitCheck) {
      addData(
        godiste,
        markaVozila,
        model,
        registracijskaOznaka,
        registracijaVaziDo,
        boja
      );
      alert(`Vozilo uspjesno dodano u bazu`);
      setIsOpen(false);
      resetForm();
    } else {
      alert("Podaci nisu validni");
    }
  };

  const cancelAction = () => {
    resetForm();
    setIsOpen(false);
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
        <div className="modal_container_add">
          <div className="modal_header">
            <div className="modal_header_title">Dodavanje novog vozila</div>
            <div className="modal_header_close" onClick={cancelAction}>
              X
            </div>
          </div>
          <div className="modal_dialog_delete">
            <form>
              <div className="form_style">
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Marka vozila:</label>
                    <input
                      name="marka"
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
                  {markaVozila?.length === 0 ? (
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
                  {model?.length === 0 ? (
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
            <div className="modal_footer_add" onClick={handleSubmit}>
              Dodaj
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

export default AddModal;
