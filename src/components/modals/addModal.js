import React, { useState } from "react";

import "../../styles/modal_basic.css";

const AddModal = ({ isOpen, setIsOpen, addData }) => {
  //const [markaVozila] = useState(item.markaVozila);

  const [markaVozila, setMarkaVozila] = useState();
  const [model, setModel] = useState();
  const [godiste, setGodiste] = useState();
  const [registracijskaOznaka, setRegistracijskaOznaka] = useState();
  const [registracijaVaziDo, setRegistracijaVaziDo] = useState();
  const [boja, setBoja] = useState();

  const resetForm = () => {
    setGodiste();
    setMarkaVozila();
    setModel();
    setRegistracijskaOznaka();
    setRegistracijaVaziDo();
    setBoja();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
                      className="input_style "
                      type="text"
                      placeholder="Audi, BMW..."
                      value={markaVozila}
                      onChange={(e) => setMarkaVozila(e.target.value)}
                    />
                  </div>
                  <span className="validation_error">
                    Ovo polje je obavezno!
                  </span>
                </div>
                <div className="form_error_row">
                  <div className="form_row">
                    <label>Model:</label>
                    <input
                      className="input_style"
                      type="text"
                      placeholder="A4, Golf, F10..."
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
                      placeholder="Godina proizvodnje"
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
                      placeholder="U formatu A00-A-000"
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
                      placeholder="U formatu 01-Januar-2000"
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
                      placeholder="Crna, Plava, Siva..."
                      value={boja}
                      onChange={(e) => setBoja(e.target.value)}
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
