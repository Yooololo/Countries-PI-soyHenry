import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCountry, getActivities } from "../actions";
import a from "./CreateCountry.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.image) {
    errors.image = "Image is required";
  } else if (!input.continent) {
    errors.continent = "Continent is required";
  } else if (!input.capital) {
    errors.capital = "Capital is required";
  } else if (!input.id) {
    errors.id = "Id is required";
  }

  return errors;
}

export default function CreateCountry() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activities = useSelector((state) => state.activities);
  const [, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    image: "",
    continent: "",
    capital: "",
    id: "",
    subregion: "",
    area: "",
    population: "",
    gmapslink: "",
    timezone: "",
    officialname: "",
    currency: "",
    currencysymbol: "",
    activities: [],
  });

  useEffect(() => {
    dispatch(getActivities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      activities: [...input.activities, e.target.value],
    });
  }

  function handleDelete(a) {
    setInput({
      ...input,
      activities: input.activities.filter((ac) => ac !== a),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postCountry(input));
    alert("Country created!");
    setInput({
      name: "",
      image: "",
      continent: "",
      capital: "",
      id: "",
      subregion: "",
      area: "",
      population: "",
      gmapslink: "",
      timezone: "",
      officialname: "",
      currency: "",
      currencysymbol: "",
      activities: [],
    });
    history.push("/home");
  }

  function handleReset(e) {
    e.preventDefault();
    let checkbox = document.getElementsByTagName("input");
    for (let i = 0; i < checkbox.length; ++i) {
      checkbox[i].checked = false;
    }
    let options = document.querySelectorAll("#activityselect option");
    for (let i = 0; i < options.length; i++) {
      options[i].selected = options[i].defaultSelected;
    }
    setInput({
      name: "",
      image: "",
      continent: "",
      capital: "",
      id: "",
      subregion: "",
      area: "",
      population: "",
      gmapslink: "",
      timezone: "",
      officialname: "",
      currency: "",
      currencysymbol: "",
      activities: [],
    });
  }

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <Link to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        <h1 className={a.titulo}>Create Country</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={a.orienta}>
            <div>
              <label className={a.losselect}>Country Name:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Flag(URL):</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="image"
                value={input.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Continent:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="continent"
                value={input.continent}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Capital:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="capital"
                value={input.capital}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>ID:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="id"
                value={input.id}
                onChange={(e) => handleChange(e)}
              />
            </div>
            </div>
          <div className={a.orienta}>
            <div>
              <label className={a.losselect}>Subregion:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="subregion"
                value={input.subregion}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Area:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="area"
                value={input.area}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Population:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="population"
                value={input.population}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Google Maps Link:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="gmapslink"
                value={input.gmapslink}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Timezone:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="timezone"
                value={input.timezone}
                onChange={(e) => handleChange(e)}
              />
            </div>
            </div>
          <div className={a.orienta}>
            <div>
              <label className={a.losselect}>Official Name:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="officialname"
                value={input.officialname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Currency:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="currency"
                value={input.currency}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Currency Symbol:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="currencysymbol"
                value={input.currencysymbol}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={a.orienta}>
            <div className={a.orienta}>
              <p className={a.losselect}>Acitivities:</p>
              <select id="activityselect" onChange={(e) => handleSelect(e)}>
                <option selected="isSelected" value>
                  Select activities
                </option>
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.activityname}>
                    {activity.activityname}
                  </option>
                ))}
              </select>
            </div>
            </div>
            <div className={a.orienta}>
            <p className={a.losselect}>Selected Activities:</p>
            <ul className="listita">
              <li className="listita">
                {input.activities.map((activity) => (
                  <p>
                    {activity}
                    <button
                      type="button"
                      onClick={() => handleDelete(activity)}
                    >
                      x
                    </button>
                  </p>
                ))}
              </li>
            </ul>
          </div>
          <div>
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
          </div>
        </form>
      </div>
    </div>
  );
}
