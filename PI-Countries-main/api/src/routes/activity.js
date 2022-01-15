const { Router } = require("express");
const { Activity } = require("../db");

const router = Router();

router.get("/", (req, res, next) => {
  return Activity.findAll()
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
  const { activityname, difficulty, duration, season, countries } = req.body;
  const newActivity = Activity.create({
    activityname,
    difficulty,
    duration,
    season,
  });
  newActivity.then((activity) => {
    activity.setCountries(countries);
  });
  return newActivity
    .then((activity) => {
      res.json(activity);
    })
    .catch((e) => {
      next(e);
    });
});

router.put("/", (req, res, next) => {
  try {
    res.status(400).json("No authorization for the required action");
  } catch (e) {
    next(e);
  }
});

router.delete("/", (req, res, next) => {
  try {
    res.status(400).json("No authorization for the required action");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
