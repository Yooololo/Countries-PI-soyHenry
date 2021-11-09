const { Router } = require('express');
const { Activity } = require('../db');


const router = Router();

router.get('/', (req, res, next) => {
    return Activity.findAll()
    .then((activity) => {
      res.json(activity);
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/", (req, res, next) => {
    const { activityname, difficulty, duration, season } = req.body;
    const newActivity = Activity.create({
      activityname,
      difficulty, 
      duration, 
      season,
    });
    return newActivity
        .then((activity) => {
      res.json(activity);
    })
        .catch((e) => {
    next(e);
  });
});

router.put('/', (req, res, next) => {
    
});

router.delete('/', (req, res, next) => {
    
});

module.exports = router;
