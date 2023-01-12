//import logo from "./logo.svg";
import "./App.css";
import AddButton from "./components/buttons/addButton";
import Header from "./components/header";
import Table from "./components/table";
import { useState } from "react";

function App() {
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
  const test = () => {
    console.log("click");
    const item = {
      id: 5,
      godiste: 2006,
      markaVozila: "Ford",
      model: "*",
      registracijskaOznaka: "J52-522",
      registracijaVaziDo: "10-jul-2023",
      boja: "crna",
    };
    setData([...data, item]);
  };

  return (
    <div className="App">
      <div onClick={test}>TEST</div>
      <Header child={<AddButton />}></Header>
      <Table data={data} />
    </div>
  );
}

export default App;
