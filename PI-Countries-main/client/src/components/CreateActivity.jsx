import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postActivity, getCountries } from "../actions";
import a from "./CreateActivity.module.css";

export default function CreateActivity() {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.countries);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    activityname: "",
    duration: "",
    country: "",
    checkdifficulty: false,
    checkseason: false,
    checkdifn: "",
    checkseasn: "",
  });

  let errorschk = {};
  function fijateErrorsCheck() {
    if (!input.checkseason) {
      errorschk.season = "Season is required";
    }
    return errorschk;
  }

  function validate(input) {
    let errors = {};
    if (!input.activityname) {
      errors.activityname = "Name is required";
    } else if (!input.checkdifficulty) {
      errors.difficulty = "Difficulty is required";
    } else if (!input.duration) {
      errors.duration = "Duration is required";
    } else if (!input.checkseason) {
      errors.season = "Season is required";
    } else if (!input.country) {
      errors.country = "Country is required";
    }
    return errors;
  }

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
    fijateErrorsCheck(e.target.name);
    setInput({
      ...input,
      checkseason: e.target.checked,
      checkseasn: e.target.value,
    });
    setErrors({
      checkseason: "",
    });
  }

  function handleCheckDifficulty(e) {
    setInput({
      ...input,
      checkdifficulty: e.target.checked,
      checkdifn: e.target.value,
    });
    setErrors({
      checkdifficulty: "",
    });
  }

  function estaEnElInputCountry(c) {
    for (let i = 0; i < input.country.length; i++) {
      if (input.country[i] === c) {
        return true;
      }
    }
    return false;
  }

  function handleSelect(e) {
    e.preventDefault();
    if (estaEnElInputCountry(e.target.value) === false) {
      setInput({
        ...input,
        country: [...input.country, e.target.value],
      });
    }
  }

  function handleDelete(c) {
    setInput({
      ...input,
      country: input.country.filter((country) => country !== c),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    if (
      input.activityname !== "" &&
      input.duration !== "" &&
      input.country !== "" &&
      input.checkseason === true &&
      input.checkdifficulty === true
    ) {
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
    } else {
      alert("Please fill all the fields");
    }
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
        <Link className={a.link} to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        <h1 className={a.titulo}>Create Activity</h1>
        <form className={a.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={a.orienta}>
            <label className={a.losselect}>Activity Name:</label>
            <input
              className={a.inputBusqueda}
              type="text"
              name="activityname"
              value={input.activityname}
              onChange={(e) => handleChange(e)}
            />
            {errors.activityname && (
              <p className={a.error}>{errors.activityname}</p>
            )}
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Difficulty:</label>
            <div className={a.optionscontrol}>
              <label className={a.options}>
                1
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkdifficulty"
                  value="1"
                  disabled={input.checkdifficulty && input.checkdifn !== "1"}
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                2
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkdifficulty"
                  value="2"
                  disabled={input.checkdifficulty && input.checkdifn !== "2"}
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                3
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkdifficulty"
                  value="3"
                  disabled={input.checkdifficulty && input.checkdifn !== "3"}
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                4
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkdifficulty"
                  value="4"
                  disabled={input.checkdifficulty && input.checkdifn !== "4"}
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              <label className={a.options}>
                5
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkdifficulty"
                  value="5"
                  disabled={input.checkdifficulty && input.checkdifn !== "5"}
                  onChange={(e) => handleCheckDifficulty(e)}
                />
              </label>
              {errors.difficulty && (
                <p className={a.error}>{errors.difficulty}</p>
              )}
            </div>
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Duration (hs):</label>
            <input
              className={a.inputBusqueda}
              type="text"
              name="duration"
              value={input.duration}
              onChange={(e) => handleChange(e)}
            />
            {errors.duration && <p className={a.error}>{errors.duration}</p>}
          </div>
          <div className={a.orienta}>
            <label className={a.losselect}>Season:</label>
            <div className={a.optionscontrol}>
              <label className={a.options}>
                Spring
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkseason"
                  value="Spring"
                  disabled={input.checkseason && input.checkseasn !== "Spring"}
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Summer
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkseason"
                  value="Summer"
                  disabled={input.checkseason && input.checkseasn !== "Summer"}
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Autumn
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkseason"
                  value="Autumn"
                  disabled={input.checkseason && input.checkseasn !== "Autumn"}
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              <label className={a.options}>
                Winter
                <input
                  className={a.inputBusquedacb}
                  type="checkbox"
                  name="checkseason"
                  value="Winter"
                  disabled={input.checkseason && input.checkseasn !== "Winter"}
                  onChange={(e) => handleCheckSeason(e)}
                />
              </label>
              {errors.season && <p className={a.error}>{errors.season}</p>}
            </div>
          </div>
          <div className={a.orienta}>
            <p className={a.losselect}>Countries:</p>
            <select
              className={a.elfknSelect}
              defaultValue="SelectActivities"
              id="countryselect"
              onChange={(e) => handleSelect(e)}
            >
              <option disabled value="SelectActivities">
                Select countries
              </option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>
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
                          onClick={() => handleDelete(country)}
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
