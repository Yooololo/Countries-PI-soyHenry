import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postCountryActivity,
  getCountries,
  getActivities,
  filterActions,
} from "../actions";
import a from "./AddCountryActivity.module.css";

export default function AddCountryActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);
  const paises = useSelector((state) => state.allContinents);

  const [input, setInput] = useState({
    activityname: "",
    country: '',
  });

  function handleSelectAction(e) {
    e.preventDefault();
    input.activityname = e.target.value;
  }

  function handleSelectCountry(e) {
    e.preventDefault();
    input.country= e.target.value;
  }

  function encuentrapais(nombre) {
    for (let i = 0; i < paises.length; i++) {
      if (paises[i].name === nombre) {
        return paises[i].id;
      }
    }
  }

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getActivities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleReset(e) {
    e.preventDefault();
    let checkbox = document.getElementsByTagName("input");
    for (let i = 0; i < checkbox.length; ++i) {
      checkbox[i].checked = false;
    }
    let options = document.querySelectorAll("#countryselect option");
    for (let i = 0; i < options.length; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    setInput({
        activityname: "",
        country: [],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let paisid = encuentrapais(input.country)
    dispatch(postCountryActivity(paisid, input.activityname));
    alert('Country and Activity related!');
    e.preventDefault();
    let options = document.querySelectorAll("#countryselect option");
    for (let i = 0; i < options.length; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    setInput({
      activityname: "",
      country: [],
    });
    history.push("/home");
  }

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <Link to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        <h1 className={a.titulo}>Create Activity</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={a.paises}>
        <div className={a.orienta}>
            <p className={a.losselect}>Select Turistic Activity:</p>
            <select
            className={a.inputBusqueda}
              onChange={(e) => handleSelectAction(e)}
            >
              <option disabled selected="isSelected" value="All">
                Select Activity
              </option>
              {activities.map((activity) => {
                return (
                  <option value={activity.activityname}>
                    {activity.activityname}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={a.orienta}>
          <p className={a.losselect}>Select Country:</p>
          <select id="countryselect" className={a.inputBusqueda} onChange={(e) => handleSelectCountry(e)}>
            <option disabled selected="isSelected" value>
              Select Country
            </option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className={a.orienta}>
        <button className={a.boton} type="submit">Submit Activity</button>
        <button className={a.boton} type="reset" onClick={(e) => handleReset(e)}>
        Reset Form
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}
