const express = require('express');
const router = express.Router();

const { getLessons } = require('../controllers/GetLessons');
const { googleLogin } = require('../controllers/LoginController');

const courses = require('../old/file/courses.json');
const User = require("../models/user.model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.get('/api/user', async function(req, res, next) {
  thisUser = await User.find({});
  thisUser = thisUser[0].basic_class;
  console.log(thisUser);
  res.json({ thisUser });
});


router.get('/api/lessons', getLessons);

router.post('/api/login', googleLogin);


/* express.use(express.static('file')); */
router.get('/old', (req, res) => {
  res.json(courses);
});

module.exports = router;