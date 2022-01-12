import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Landing.css";
import Tierra from "../components/Video/Tierra.mp4";

export default function LandingPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getActivities());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="landing-page">
      <video id="videotierra" className="video" autoPlay loop muted>
        <source src={Tierra} type="video/mp4" />
      </video>
      <h1 className="titulo">Welcome to planet Earth!</h1>
      <p>
        <Link to="/home">
          <button className="homebtn">Access</button>
        </Link>
      </p>
    </div>
  );
}
