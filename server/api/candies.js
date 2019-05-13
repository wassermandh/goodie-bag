const router = require('express').Router();
const candyModel = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  const data = await candyModel.findAll();
  res.json(data);
});

module.exports = router;
