import "../styles/table.css";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";
import AddButton from "./buttons/addButton";
import { useState } from "react";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      godiste: 2000,
      markaVozila: "BMW",
      model: "F10",
      registracijskaOznaka: "J52-522",
      registracijaVaziDo: "10-jul-2023",
      boja: "crna",
    },
    {
      id: 2,
      godiste: 2000,
      markaVozila: "Mercedes-Benz",
      model: "W204",
      registracijskaOznaka: "J52-522",
      registracijaVaziDo: "10-jul-2023",
      boja: "siva",
    },
    {
      id: 3,
      godiste: 2000,
      markaVozila: "Audi",
      model: "A5",
      registracijskaOznaka: "J52-522",
      registracijaVaziDo: "10-jul-2023",
      boja: "plava",
    },
    {
      id: 4,
      godiste: 2000,
      markaVozila: "Volkswagen",
      model: "Arteon",
      registracijskaOznaka: "J52-522",
      registracijaVaziDo: "10-jul-2023",
      boja: "crna",
    },
  ]);

  const idAssign = () => {
    let highestNumber = 0;
    data.forEach((item) => {
      if (item.id > highestNumber) {
        highestNumber = item.id;
      }
    });

    return highestNumber;
  };

  const addCar = (
    propGodiste,
    propMarka,
    propModel,
    propOznaka,
    propVazi,
    propBoja
  ) => {
    const item = {
      id: idAssign() + 1,
      godiste: propGodiste,
      markaVozila: propMarka,
      model: propModel,
      registracijskaOznaka: propOznaka,
      registracijaVaziDo: propVazi,
      boja: propBoja,
    };
    setData([...data, item]);
  };

  const deleteCar = (carId) => {
    setData(data.filter((car, index) => car.id !== carId));
  };

  const editCar = (
    propId,
    propGodiste,
    propMarka,
    propModel,
    propOznaka,
    propVazi,
    propBoja
  ) => {
    let tempData = data;
    tempData.forEach((car, index) => {
      if (car.id === propId) {
        tempData[index] = {
          markaVozila: propMarka,
          id: tempData[index].id,
          godiste: propGodiste,
          model: propModel,
          registracijskaOznaka: propOznaka,
          registracijaVaziDo: propVazi,
          boja: propBoja,
        };
      }
    });
    setData([...tempData]);
  };

  return (
    <div className="Table">
      <table>
        <tr>
          <th style={{ width: 100 }}>Redni broj</th>
          <th>Marka Vozila</th>
          <th>Godiste</th>
          <th>Registracijska oznaka</th>
          <th style={{ width: 200 }}>
            <AddButton expandData={addCar} />
          </th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{key + 1}.</td>
              <td>{val.markaVozila}</td>
              <td>{val.godiste}</td>
              <td>{val.registracijskaOznaka}</td>
              <td>
                <div className="button_arrange">
                  <EditButton value={val} editAction={editCar} />
                  <DeleteButton value={val} deleteAction={deleteCar} />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
