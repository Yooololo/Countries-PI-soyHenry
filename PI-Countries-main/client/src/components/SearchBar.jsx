import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchCountryName,
  searchCountryId,
  searchCountryCapital,
} from "../actions";
import a from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [capital, setCapital] = useState("");

  function handleChangeName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmitName(event) {
    event.preventDefault();
    dispatch(searchCountryName(name));
    document.getElementById("cname").value = "";
    setName("");
  }

  function handleChangeId(event) {
    event.preventDefault();
    setId(event.target.value);
  }

  function handleSubmitId(event) {
    event.preventDefault();
    dispatch(searchCountryId(id));
    document.getElementById("cid").value = "";
    setId("");
  }

  function handleChangeCapital(event) {
    event.preventDefault();
    setCapital(event.target.value);
  }

  function handleSubmitCapital(event) {
    event.preventDefault();
    dispatch(searchCountryCapital(capital));
    document.getElementById("ccapi").value = "";
    setCapital("");
  }

  return (
    <>
      <nav className={a.barraBusqueda}>
        <div>
          <input
          className={a.inputBusqueda}
            id="cid"
            type="text"
            placeholder="Search Country by Id"
            onChange={(e) => handleChangeId(e)}
          />
          <button className={a.botonBusqueda} type="submit" onClick={(e) => handleSubmitId(e)}>
            Search
          </button>
        </div>
        <div>
          <input
          className={a.inputBusqueda}
            id="cname"
            type="text"
            placeholder="Search Country by Name"
            onChange={(e) => handleChangeName(e)}
          />
          <button className={a.botonBusqueda} type="submit" onClick={(e) => handleSubmitName(e)}>
            Search
          </button>
        </div>
        <div>
          <input
          className={a.inputBusqueda}
            id="ccapi"
            type="text"
            placeholder="Search Country by Capital"
            onChange={(e) => handleChangeCapital(e)}
          />
          <button className={a.botonBusqueda} type="submit" onClick={(e) => handleSubmitCapital(e)}>
            Search
          </button>
        </div>
      </nav>
    </>
  );
}
