var express = require('express');
var router = express.Router();

//require controller that will export Skills CRUD functions:
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills:
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;