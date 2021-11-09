import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountriesByContinent,
  filterActions,
  order,
  orderbypop,
  getCountryActivity,
  postCountryActivity,
  getActivities,
} from "../actions";
import { Link } from "react-router-dom";
import PaisSimple from "./PaisSimple.jsx";
import Paginado from "./Paginado.jsx";
import SearchBar from "./SearchBar.jsx";
import a from "./Home.module.css";
import "./Home.css";

const paisesporpagina = 9;
export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const [, setOrdenado] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(paisesporpagina);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getActivities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountries());
    let options = document.querySelectorAll(".losselectores option");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
  }

  function handleFilterAction(e) {
    e.preventDefault();
    dispatch(filterActions(e.target.value));
  }

  function handleOrder(e) {
    e.preventDefault();
    dispatch(order(e.target.value));
    setCurrentPage(1);
    setOrdenado(`Ordered by  ${e.target.value}`);
    let options = document.querySelectorAll(".harringui option");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
  }

  function handleOrderPop(e) {
    e.preventDefault();
    dispatch(orderbypop(e.target.value));
    setCurrentPage(1);
    setOrdenado(`Ordered by  ${e.target.value}`);
    let options = document.querySelectorAll(".piiiiter option");
    for (let i = 0, l = options.length; i < l; i++) {
      options[i].selected = options[i].defaultSelected;
    }
  }

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <SearchBar />
        <Link className={a.about} to="/about">
          About
        </Link>
        <Link className={a.landing} to="/">
          Landing
        </Link>
        <div className={a.widthtmc}>
          <div className={a.todomenoscountries}>
            <button
              className={a.boton}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Reload Countries
            </button>
            <Link className={a.boton} to="/countries">
              Add Country
            </Link>
            <Link className={a.boton} to="/activity">
              Add Activity
            </Link>
            <Link className={a.boton} to="/countryactivity">
              Relate Country-Activty
            </Link>
            {/* <Link className={a.boton} to={`/activities`}>
              See Activities
            </Link> */}
          </div>
        </div>
        <div className={a.widthtmc}>
          <div className={a.todomenoscountries}>
            <div>
              <p className={a.losselect}>Order by Name</p>
              <select
                className="losselectores piiiiter"
                onChange={(e) => handleOrder(e)}
              >
                <option selected="isSelected">-</option>
                <option value="Ascendant">A-Z</option>
                <option value="Descendant">Z-A</option>
              </select>
            </div>
            <div>
              <p className={a.losselect}>Order by Population</p>
              <select
                className="losselectores harringui"
                onChange={(e) => handleOrderPop(e)}
              >
                <option selected="isSelected">-</option>
                <option value="Ascendantpop">Lowest to Highest</option>
                <option value="Descendantpop">Highest to Lowest</option>
              </select>
            </div>
            <div>
              <p className={a.losselect}>Filter by Continent</p>
              <select
                className="losselectores"
                onChange={(e) => handleFilterContinent(e)}
              >
                <option selected="isSelected" value="All">
                  All
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
              <p className={a.losselect}>Filter by Turistic Activity</p>
              <select
                className="losselectores"
                onChange={(e) => handleFilterAction(e)}
              >
                <option selected="isSelected" value="All">
                  All
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
        </div>
        <Paginado
          className={a.paginado}
          countriesPerPage={countriesPerPage}
          allCountries={allCountries}
          paginado={paginado}
        />
        <div className={a.paises}>
          {currentCountries.map((country) => {
            return (
              <div className={a.cadapais}>
                <Link to={`/countries/${country.id}`}>
                  <PaisSimple
                    name={country.name}
                    image={country.image}
                    continent={country.continent}
                    key={country.name}
                    activities={country.activities}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
