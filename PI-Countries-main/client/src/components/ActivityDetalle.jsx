import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryActivity } from "../actions/index";
import { useEffect } from "react";

export default function ActivityDetalle() {
    const dispatch = useDispatch();
    const activityDetail = useSelector((state) => state.activities);
    const { activityname } = useParams();

    useEffect(() => {
        dispatch(getCountryActivity(activityname));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [dispatch]);

      return (
        <>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <p>Activities:</p>
          {
            <div>
              {activityDetail
                ? activityDetail.map((activity) => (
                    <li key={activity.activityname}>{activity.activityname}</li>
                  ))
                : null}
            </div>
          }
      </>
      );
      //VER QUE PAISES REALIZAN DICHA ACTIVIDAD
}