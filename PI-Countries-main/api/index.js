//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db");
const { Sequelize } = require("sequelize");
const PORT = 3001;
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
const country_activity = require("./src/forpsql/country_activity");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on: PORT ${PORT}`); // eslint-disable-line no-console
    const countriesAPI = "https://restcountries.com/v3.1/all";
    const APIData = async (req, res) => {
      const getAllData = await axios.get(countriesAPI);
      const getData = getAllData.data;
      getData.map((country) => {
        return Country.create({
          name: country.name.common.toString(),
          image: country.flags.png.toString(),
          continent: country.continents.toString(),
          capital: country.capital ? country.capital.toString() : "",
          id: country.cca3.toString(),
          subregion: country.subregion,
          area: country.area.toString(),
          population: country.population.toString(),
          gmapslink: country.maps.googleMaps.toString(),
          timezones: country.timezones.toString(),
          officialname: country.name.official.toString(),
          currency: country.capital
            ? Object.values(country.currencies)[0].name
            : "",
          currencysymbol: country.capital
            ? Object.values(country.currencies)[0].symbol
            : "",
        })
          .then(() => {
            country_activity();
          })
          .catch((err) => console.log(err));
      });
    };
    APIData()
      .then(() => {
        console.log("Data added correctly to DB");
      })
      .catch((err) => console.log(err));
  });
});
