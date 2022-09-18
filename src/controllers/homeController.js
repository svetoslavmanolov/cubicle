const router = require('express').Router();
const cubeService = require('../services/cubeService');
//const cubes = require('../db.json');

router.get('/', (req, res) => {
    //let querystring = req.query;
    let { search, from, to} = req.query; //ako gi nqma shte sa undefined, no nqma problem
    //console.log(search, from, to) 
    const cubes = cubeService.getAll(search, from, to);  //Number(from), Number(to) ne se obrashtat tuk, zashoto moje da sa undefined i shte gramne
    res.render('index', { cubes, search, from, to });
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