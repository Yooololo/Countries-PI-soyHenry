import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCountryActivity, getCountries, getActivities } from "../actions";
import a from "./AddCountryActivity.module.css";

export default function AddCountryActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);
  const activities = useSelector((state) => state.activities);
  const paises = useSelector((state) => state.allContinents);
  const [input, setInput] = useState({
    activityname: "",
    country: "",
  });

  function estaEnElInputActivity(a) {
    for (let i = 0; i < input.activityname.length; i++) {
      if (input.activityname[i] === a) {
        return true;
      }
    }
    return false;
  }

  function handleSelectAction(e) {
    e.preventDefault();
    if (estaEnElInputActivity(e.target.value) === false) {
      setInput({
        ...input,
        activityname: [...input.activityname, e.target.value],
      });
    }
  }

  function estaEnElInputCountry(c) {
    for (let i = 0; i < input.country.length; i++) {
      if (input.country[i] === c) {
        return true;
      }
    }
    return false;
  }

  function handleSelectCountry(e) {
    e.preventDefault();
    if (estaEnElInputCountry(e.target.value) === false) {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
    }
  }

  function encuentrapais(paisnombre) {
    let paisesselecc = [];
    for (let j = 0; j < paisnombre.length; j++) {
      for (let i = 0; i < paises.length; i++) {
        if (paises[i].name === paisnombre[j]) {
          paisesselecc.push(paises[i].id);
        }
      }
    }
    return paisesselecc;
  }

  function encuentraactivity(actividadnombre) {
    let actividadesselecc = [];
    console.log(activities, actividadnombre);
    for (let j = 0; j < actividadnombre.length; j++) {
      for (let i = 0; i < activities.length; i++) {
        if (activities[i].activityname === actividadnombre[j]) {
          actividadesselecc.push(activities[i].id);
        }
      }
    }
    return actividadesselecc;
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
      country: "",
    });
  }

  function handleDeleteActivity(a) {
    setInput({
      ...input,
      activityname: input.activityname.filter((activity) => activity !== a),
    });
  }

  function handleDeleteCountry(c) {
    setInput({
      ...input,
      country: input.country.filter((country) => country !== c),
    });
  }

  function submitActivityAndCountry(paises, actividades) {
    let paisesid = encuentrapais(paises);
    let actividadesid = encuentraactivity(actividades);
    for (let i = 0; i < paisesid.length; i++) {
      for (let j = 0; j < actividadesid.length; j++) {
        dispatch(postCountryActivity(paisesid[i], actividadesid[j]));
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.country.length === 0 || input.activityname.length === 0) {
      alert("Please select at least one country and one activity");
    } else {
      submitActivityAndCountry(input.country, input.activityname);
      alert("Country and Activity related!");
      let options = document.querySelectorAll("#countryselect option");
      for (let i = 0; i < options.length; i++) {
        options[i].selected = options[i].defaultSelected;
      }
      setInput({
        activityname: "",
        country: "",
      });
      history.push("/home");
    }
  }

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <Link className={a.link} to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        <h1 className={a.titulo}>Relate Country-Activity</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={a.paises}>
            <div className={a.orienta}>
              <p className={a.losselect}>Select Turistic Activity:</p>
              <select
                className={a.inputBusqueda}
                onChange={(e) => handleSelectAction(e)}
                defaultValue="All"
              >
                <option disabled value="All">
                  Select Activity
                </option>
                {activities.map((activity) => {
                  return (
                    <option
                      key={activity.activityname}
                      value={activity.activityname}
                    >
                      {activity.activityname}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={a.orienta}>
              <p className={a.losselect}>Selected Activities:</p>
              <div className={a.orienta}>
                <div className={a.orienta}>
                  {input.activityname && input.activityname.length
                    ? input.activityname.map((activity) => (
                        <p className={a.lospaises} key={activity}>
                          {activity}
                          <button
                            className={a.botoncin}
                            type="button"
                            onClick={() => handleDeleteActivity(activity)}
                          >
                            x
                          </button>
                        </p>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className={a.orienta}>
            <p className={a.losselect}>Select Country:</p>
            <select
              defaultValue="habibi"
              id="countryselect"
              className={a.inputBusqueda}
              onChange={(e) => handleSelectCountry(e)}
            >
              <option disabled value="habibi">
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
            <p className={a.losselect}>Selected Countries:</p>
            <div className={a.lista}>
              <div className={a.listita}>
                {input.country && input.country.length
                  ? input.country.map((country) => (
                      <p key={country} className={a.lospaises}>
                        {country}
                        <button
                          className={a.botoncin}
                          type="button"
                          onClick={() => handleDeleteCountry(country)}
                        >
                          x
                        </button>
                      </p>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className={a.orienta}>
            <button className={a.boton} type="submit">
              Submit Activity
            </button>
            <button
              className={a.boton}
              type="reset"
              onClick={(e) => handleReset(e)}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
