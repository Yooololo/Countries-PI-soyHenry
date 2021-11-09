const { Router } = require('express');
const countryRoute = require('./countries');
const activitiesRoute = require('./activity');
const { country_activity } = require('../db');


const router = Router();

router.use('/countries', countryRoute);
router.use('/activity', activitiesRoute);

router.get('/countryactivity', (req, res, next) => {
    return country_activity.findAll()
    .then((countryactivity) => {
      res.json(countryactivity);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
