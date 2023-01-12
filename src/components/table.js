import "../styles/table.css";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";
//import { useState } from "react";

const Table = ({ data }) => {
  return (
    <div className="Table">
      <table>
        <tr>
          <th style={{ width: 100 }}>Redni broj</th>
          <th>Marka Vozila</th>
          <th>Godiste</th>
          <th>Registracijska oznaka</th>
          <th style={{ width: 200 }}></th>
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
                  <EditButton value={val} />
                  <DeleteButton value={val} />
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
