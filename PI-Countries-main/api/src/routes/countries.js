const { Router } = require("express");
const { Country, Activity } = require("../db");
const { Op, Sequelize } = require("sequelize");

const router = Router();

//----------------------------------------------//

router.get("/:idoname", async (req, res, next) => {
  let pais = null;
  try {
    if (req.params) {
      const { idoname } = req.params;
      if (idoname.length <= 3) {
        pais = await Country.findOne({
          include: {
            model: Activity,
            as: "activities",
            attributes: ["activityname", "difficulty", "season", "duration"],
          },
          where: {
            id: { [Sequelize.Op.iLike]: `${idoname}` },
          },
        });
      } else {
        pais = await Country.findOne({
          include: {
            model: Activity,
            as: "activities",
            attributes: ["activityname", "difficulty", "season", "duration"],
          },
          where: {
            name: { [Sequelize.Op.iLike]: `${idoname}` },
          },
        });
      }
    }
    if (pais === null) {
      return res.json("Country not found");
    } else {
      return res.json(pais);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  if (req.query) {
    let pais = null;
    try {
      if (req.query.name) {
        const { name } = req.query;
        pais = await Country.findAll({
          include: { model: Activity, as: "activities" },
          where: {
            name: { [Sequelize.Op.iLike]: `%${name}%` },
          },
        });
        if (pais === null) {
          return res.json("No countries match that name");
        } else {
          return res.json(pais);
        }
      } else if (req.query.id) {
        const { id } = req.query;
        pais = await Country.findAll({
          include: { model: Activity, as: "activities" },
          where: {
            id: { [Sequelize.Op.iLike]: `%${id}%` },
          },
        });
        if (pais === null) {
          return res.json("No countries match that name");
        } else {
          return res.json(pais);
        }
      } else if (req.query.capital) {
        const { capital } = req.query;
        pais = await Country.findAll({
          include: { model: Activity, as: "activities" },
          where: {
            capital: { [Sequelize.Op.iLike]: `%${capital}%` },
          },
        });
        if (pais === null) {
          return res.json("No countries match that name");
        } else {
          return res.json(pais);
        }
      } else {
        return Country.findAll({
          include: { model: Activity, as: "activities" },
        })
          .then((countries) => {
            res.json(countries);
          })
          .catch((err) => {
            next(err);
          });
      }
    } catch (err) {
      next(err);
    }
  }
});

//----------------------------------------------//

router.post("/", (req, res, next) => {
  {
    const {
      name,
      image,
      continent,
      capital,
      id,
      subregion,
      area,
      population,
      gmapslink,
      timezone,
      officialname,
      currency,
      currencysymbol,
      activities,
    } = req.body;
    const newCountry = Country.create({
      name,
      image,
      continent,
      capital,
      id,
      subregion,
      area,
      population,
      gmapslink,
      timezone,
      officialname,
      currency,
      currencysymbol,
    });
    newCountry.then((country) => {
      country.setActivities(activities);
    });
    return newCountry
      .then((country) => {
        res.status(201).json(country);
      })
      .catch((e) => {
        next(e);
      });
  }
});

router.post("/:countryid/:activityid", async (req, res, next) => {
  try {
    const { countryid, activityid } = req.params;
    const country = await Country.findOne({
      where: { id: `${countryid.toUpperCase()}` },
    });
    const activity = await Activity.findOne({
      where: { id: `${activityid}` },
    });
    if (!activity) {
      res
        .status(404)
        .json(`Activity: '${activity.activityname}' not found in database`);
    } else {
      country.addActivity(activity);
      res.status(201).send(`${activityid} added to ${countryid}`);
    }
  } catch (e) {
    next(e);
  }
});

//----------------------------------------------//

router.put("/{name}", async (req, res, next) => {
  try {
    res.status(400).json("No authorization for the required action");
  } catch (e) {
    next(e);
  }
});

//----------------------------------------------//

router.delete("/", async (req, res, next) => {
  try {
    res.status(400).json("No authorization for the required action");
  } catch (e) {
    next(e);
  }
});

//----------------------------------------------//

module.exports = router;
