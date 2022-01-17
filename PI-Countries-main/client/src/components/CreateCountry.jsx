import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCountry, getActivities } from "../actions";
import a from "./CreateCountry.module.css";

export default function CreateCountry() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activities = useSelector((state) => state.activities);

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
    activities: "",
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
  }

  function estaEnElInputActivity(a) {
    for (let i = 0; i < input.activities.length; i++) {
      if (input.activities[i] === a) {
        return true;
      }
    }
    return false;
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    setInput({
      ...input,
      continent: e.target.value,
    });
  }

  function handleSelect(e) {
    e.preventDefault();
    if (estaEnElInputActivity(e.target.value) === false) {
      setInput({
        ...input,
        activities: [...input.activities, e.target.value],
      });
    }
  }

  function handleDelete(a) {
    setInput({
      ...input,
      activities: input.activities.filter((ac) => ac !== a),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (
      input.name !== "" &&
      input.image !== "" &&
      input.continent !== "" &&
      input.capital !== "" &&
      input.id !== ""
    ) {
      if (input.activities.length === 0) {
        input.activities = null;
      }
      input.timezone = "UTC" + input.timezone;
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
        activities: "",
      });
      history.push("/home");
    } else {
      alert("Please fill all the mandatory fields (*)");
    }
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
    let optionsCont = document.querySelectorAll("#countryselect option");
    for (let i = 0; i < optionsCont.length; i++) {
      optionsCont[i].selected = optionsCont[i].defaultSelected;
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
      activities: "",
    });
  }

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <Link className={a.link} to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        <h1 className={a.titulo}>Create Country</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={a.orienta}>
            <div>
              <label className={a.losselect}>Country Name*:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Flag(URL)*:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="image"
                value={input.image}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>Continent*:</label>
              <select
                className={a.elfknSelect}
                onChange={(e) => handleFilterContinent(e)}
                defaultValue="--Select--"
                id="countryselect"
              >
                <option value="--Select--" disabled>
                  --Select--
                </option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctica">Antarctica</option>
              </select>
            </div>
            <div>
              <label className={a.losselect}>Capital*:</label>
              <input
                className={a.inputBusqueda}
                type="text"
                name="capital"
                value={input.capital}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label className={a.losselect}>ID*:</label>
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
              <label className={a.losselect}>
                <p>
                  Area: (km<sup>2</sup>)
                </p>
              </label>
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
                placeholder="XX:XX"
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
            <p className={a.losselecte}>Activities:</p>
            <select
              defaultValue="SelectActivities"
              id="activityselect"
              className={a.elfknSelect}
              onChange={(e) => handleSelect(e)}
            >
              <option disabled value="SelectActivities">
                Select activities
              </option>
              {activities.map((activity) => (
                <option
                  key={activity.activityname}
                  value={activity.activityname}
                >
                  {activity.activityname}
                </option>
              ))}
            </select>
          </div>
          <div className={a.orienta}>
            <p className={a.losselect}>Selected Activities:</p>
            <div className={a.orienta}>
              <div className={a.orienta}>
                {input.activities && input.activities.length
                  ? input.activities.map((activity) => (
                      <p className={a.lasactivities} key={activity}>
                        {activity}
                        <button
                          className={a.botoncin}
                          type="button"
                          onClick={() => handleDelete(activity)}
                        >
                          x
                        </button>
                      </p>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div>
            <div className={a.orienta}>
              <button className={a.boton} type="submit">
                Submit Country
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
