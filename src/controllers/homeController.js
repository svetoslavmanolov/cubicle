const cubes = require('../db.json');


exports.index = (req, res) => {
    res.render('index', { cubes });   //{ cubes: cubes } shorthand 
}

exports.about = (req, res) => {
    res.render('about');
}