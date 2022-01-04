const initialState = {
  countries: [],
  allCountries: [],
  allContinents: [],
  activities: [],
  countryactivities: [],
  countrydetail: [],
};

function reducer(state = initialState, action) {
  const allCountries = state.allCountries;
  const countries = state.countries;
  const allContinents = state.allContinents;
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
        allContinents: action.payload,
      };
    case "SEARCH_COUNTRY_NAME":
      return {
        ...state,
        countries: action.payload,
      };
    case "SEARCH_COUNTRY_ID":
      return {
        ...state,
        countries: action.payload,
      };
    case "SEARCH_COUNTRY_CAPITAL":
      return {
        ...state,
        countries: action.payload,
      };
    case "GET_COUNTRY_DETAIL":
      return {
        ...state,
        countrydetail: action.payload,
      };
    case "FILTER_COUNTRIES_BY_CONTINENT":
      const statusFilter =
        action.payload === "All"
          ? allContinents
          : allContinents.filter(
              (country) => country.continent === action.payload
            );
      return {
        ...state,
        countries: statusFilter,
        allCountries: statusFilter,
      };
    case "FILTER_ACTIONS":
    const activityFilter =
        action.payload === "All"
          ? allCountries
          : allCountries.filter( //eslint-disable-next-line
            (country) => {
              for(let i = 0; i < country['activities'].length; i++) {
                if(country['activities'][i].activityname === action.payload) {
                  return (country);
                }
              }
          });
      return {
        ...state,
        countries: activityFilter,
        allContinents: activityFilter,
      };
    case "ORDERBYNAME":
      const orderFilter =
        action.payload === "Ascendant"
          ? countries.sort((a, b) => a.name.localeCompare(b.name))
          : countries.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        countries: orderFilter,
      };
    case "ORDERBYPOP":
      const orderFilter2 =
        action.payload === "Ascendantpop"
          ? countries.sort((a, b) => a.population - b.population)
          : countries.sort((a, b) => b.population - a.population);
      return {
        ...state,
        countries: orderFilter2,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };
    case "GET_COUNTRY_ACTIVITIES":
      return {
        ...state,
        countryactivities: action.payload,
      };
    case "POST_ACTIVITY":
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case "POST_COUNTRY":
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
      case "POST_COUNTRY_ACTIVITY":
        return {
          ...state,
          countryactivities: [...state.countryactivities, action.payload],
        };
    default:
      return state;
  }
}

export default reducer;
