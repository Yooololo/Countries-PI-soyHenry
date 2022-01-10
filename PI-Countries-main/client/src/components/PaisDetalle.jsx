import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../actions/index";
import { useEffect } from "react";
import a from "./PaisDetalle.module.css";

export default function PaisDetalle(props) {
  const dispatch = useDispatch();
  const paisDetail = useSelector((state) => state.countrydetail);
  const { idoname } = useParams();

  useEffect(() => {
    dispatch(getCountryDetail(idoname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={a.toito}>
      <div className={a.bkg} />
      <div className={a.container}>
        <Link className={a.link} to="/home">
          <button className={a.botonpro}>Home</button>
        </Link>
        {paisDetail ? (
          <div className={a.cuadro}>
            <div className={a.cuadrados}>
              <h1 className={a.pais}>{paisDetail.name}</h1>
              <img
                className={a.img}
                src={paisDetail.image}
                alt={paisDetail.name}
              ></img>
              <p className={a.titulo}>
                Official Name: {paisDetail.officialname}
              </p>
              <p className={a.titulo}>Continent: {paisDetail.continent}</p>
              <p className={a.titulo}>Capital: {paisDetail.capital}</p>
              {paisDetail.subregion ? (
                <p className={a.titulo}>Subregion: {paisDetail.subregion}</p>
              ) : null}
            </div>
            <div className={a.cuadrados}>
              <p className={a.titulo}>
                Area: {paisDetail.area} Km<sup>2</sup>
              </p>
              <p className={a.titulo}>Population: {paisDetail.population}</p>
              <p className={a.titulo}>ID (cioc): {paisDetail.id}</p>
              <p className={a.titulo}>
                Google Maps Link:
                <a
                  className={a.titulopro}
                  href={paisDetail.gmapslink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {` ${paisDetail.name}`}
                </a>
              </p>
              <p className={a.titulo}>Timezones: {paisDetail.timezones}</p>
              <p className={a.titulo}>
                Currency: {paisDetail.currency} ({paisDetail.currencysymbol})
              </p>
            </div>
            <div className={a.cuadrados}>
              <p className={a.titulo}>Activities:</p>
              {
                <div className={a.titulolista}>
                  <hr />
                  {paisDetail.activities && paisDetail.activities.length ? (
                    paisDetail.activities.map((activity) => (
                      <li className={a.listitaa} key={activity.activityname}>
                        Activity: {activity.activityname}{" "}
                        <p className={a.detalles}>
                          Duration: {activity.duration} Season:{" "}
                          {activity.season} Difficulty: {activity.difficulty}
                        </p>
                        <hr />
                      </li>
                    ))
                  ) : (
                    <div>
                      {paisDetail.name} has no activities related to the country
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
