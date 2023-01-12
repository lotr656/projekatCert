import React from "react";
import { useState } from "react";
import "../../styles/modal_basic.css";

const EditModal = ({ isOpen, setIsOpen, item }) => {
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
  const cancelAction = () => {
    setIsOpen(false);
    console.log("cancel");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
              <div className="edit_form_first">
                <label>
                  Marka vozila:
                  <input
                    className="input_style"
                    type="text"
                    value={markaVozila}
                    onChange={(e) => setMarkaVozila(e.target.value)}
                  />
                </label>
                <label>
                  Model:
                  <input
                    className="input_style"
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </label>
              </div>
              <div className="edit_form_second">
                <label>
                  Godiste:
                  <input
                    className="input_style"
                    type="number"
                    value={godiste}
                    onChange={(e) => setGodiste(e.target.value)}
                  />
                </label>
                <label>
                  Registracijska oznaka:
                  <input
                    className="input_style"
                    type="text"
                    value={registracijskaOznaka}
                    onChange={(e) => setRegistracijskaOznaka(e.target.value)}
                  />
                </label>
              </div>
              <div className="edit_form_third">
                <label>
                  Registracija vazi do:
                  <input
                    className="input_style"
                    type="text"
                    value={registracijaVaziDo}
                    onChange={(e) => setRegistracijaVaziDo(e.target.value)}
                  />
                </label>
                <label>
                  Boja:
                  <input
                    className="input_style"
                    type="text"
                    value={boja}
                    onChange={(e) => setBoja(e.target.value)}
                  />
                </label>
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
