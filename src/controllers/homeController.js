const router = require('express').Router();
const cubeService = require('../services/cubeService');
//const cubes = require('../db.json');

router.get('/', (req, res) => {
    //let querystring = req.query;
    let { search, from, to} = req.query; //ako gi nqma shte sa undefined, no nqma problem
    //onsole.log(search, from, to) 
    const cubes = cubeService.getAll(search, from, to);
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