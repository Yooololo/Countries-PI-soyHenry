import React from "react";
import a from "./PaisSimple.module.css";

export default function PaisSimple({ name, image, continent, activities }) {
  return (
    <div className={a.toito}>
        <h1 className={a.namemas}>{name}</h1>
        <h2 className={a.name}>({continent})</h2>
      <img className={a.bandera} src={image} alt={name} />
      <div className={a.activities}>
        {activities
          ? activities.map((activity) => (
              <li key={activity.activityname}>{activity.activityname}</li>
            ))
          : null}
      </div>
    </div>
  );
}
