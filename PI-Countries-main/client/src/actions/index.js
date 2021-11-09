import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/countries", {});
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
}
//VER QUE ESTAS FUNCIONES TIREN ERROR SI NO HAY MATCH
export function searchCountryName(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries?name=${payload}`, {});
      return dispatch({
        type: "SEARCH_COUNTRY_NAME",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountryId(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries?id=${payload}`, {});
      return dispatch({
        type: "SEARCH_COUNTRY_ID",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchCountryCapital(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries?capital=${payload}`, {});
      return dispatch({
        type: "SEARCH_COUNTRY_CAPITAL",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCountriesByContinent(payload) {
  return {
    type: "FILTER_COUNTRIES_BY_CONTINENT",
    payload,
  };
}

export function filterActions(payload) {
  return {
    type: "FILTER_ACTIONS",
    payload,
  };
}

export function order(payload) {
  return {
    type: "ORDERBYNAME",
    payload,
  };
}

export function orderbypop(payload) {
    return {
      type: "ORDERBYPOP",
      payload,
    };
  }

export function getActivities() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/activity`, {});
      return dispatch({
        type: "GET_ACTIVITIES",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
} 

export function postActivity(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/activity`, payload, {});
      return dispatch({
        type: "POST_ACTIVITY",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function postCountry(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/countries`, payload, {});
      return dispatch({
        type: "POST_COUNTRY",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function getCountryActivity() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countryactivity`, {});
      return dispatch({
        type: "GET_COUNTRY_ACTIVITY",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function getCountryDetail(idorname) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${idorname}`, {});
      return dispatch({
        type: "GET_COUNTRY_DETAIL",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function postCountryActivity(countryid, activityname) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`http://localhost:3001/countries/${countryid}/${activityname}`, {});
      return dispatch({
        type: "POST_COUNTRY_ACTIVITY",
        payload: response.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}