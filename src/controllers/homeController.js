const router = require('express').Router();

const cubes = require('../db.json');

router.get('/', (req, res) => {
    res.render('index', { cubes });
});

// exports.index = (req, res) => {
//     res.render('index', { cubes });   //{ cubes: cubes } shorthand 
// }

router.get('/about', (req, res) => {
    res.render('about');
});

// exports.about = (req, res) => {
//     res.render('about');
// }

module.exports = router;