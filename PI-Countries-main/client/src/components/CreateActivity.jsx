import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountries } from "../actions";
import a from "./CreateActivity.module.css";

function validate(input) {
  let errors = {};
  if (!input.activityname) {
    errors.activityname = "Name is required";
  } else if (!input.difficulty) {
    errors.difficulty = "Difficulty is required";
  } else if (!input.duration) {
    errors.duration = "Duration is required";
  } else if (!input.country) {
    errors.country = "Country is required";
  }
  return errors;
}

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    activityname: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  useEffect(() => {
    dispatch(getCountries());
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

  function handleCheckSeason(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        season: e.target.value,
      });
    }
  }

  function handleCheckDifficulty(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        difficulty: e.target.value,
      });
    }
  }

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
  }

  function handleDelete(c) {
    setInput({
      ...input,
      country: input.country.filter((country) => country !== c),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(input));
    alert("Activity created!");
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
      duration: "",
      country: [],
    });
    history.push("/home");
  }

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
      duration: "",
      country: [],
    });
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
          <div className={a.orienta}>
            <label className={a.losselect}>Activity Name:</label>
            <input className={a.inputBusqueda}
              type="text"
              name="activityname"
              value={input.activityname}
              onChange={(e) => handleChange(e)}
            />
            {errors.activityname && (
              <p className="error">{errors.activityname}</p>
            )}
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Difficulty:</label>
            <div className={a.optionscontrol}>
              <label className={a.options}>
                1
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="1"
                  value="1"
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                2
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="2"
                  value="2"
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                3
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="3"
                  value="3"
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                4
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="4"
                  value="4"
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                5
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="5"
                  value="5"
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              {errors.difficulty && (
                <p className="error">{errors.difficulty}</p>
              )}
            </div>
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Duration (hs):</label>
            <input className={a.inputBusqueda}
              type="text"
              name="duration"
              value={input.duration}
              onChange={(e) => handleChange(e)}
            />
            {errors.duration && <p className="error">{errors.duration}</p>}
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Season:</label>
            <div className={a.optionscontrol}>
              <label className={a.options}>
                Spring
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="Spring"
                  value="Spring"
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Summer
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="Summer"
                  value="Summer"
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Autumn
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="Autumn"
                  value="Autumn"
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Winter
                <input className={a.inputBusquedacb}
                  type="checkbox"
                  name="Winter"
                  value="Winter"
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              {errors.season && <p className="error">{errors.season}</p>}
            </div>
          </div>
          <div className={a.orienta}>
            <p className={a.losselect}>Countries:</p>
            <select id="countryselect" onChange={(e) => handleSelect(e)}>
              <option selected="isSelected" value>
                Select countries
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
            <ul className={a.lista}>
              <li className={a.listita}>
                {input.country.map((country) => (
                  <p className={a.lospaises}>
                    {country}
                    <button
                      className={a.botoncin}
                      type="button"
                      onClick={() => handleDelete(country)}
                    >
                      x
                    </button>
                  </p>
                ))}
              </li>
            </ul>
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
