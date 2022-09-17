const router = require('express').Router();
const fs = require('fs/promises');
const path = require('path');
const cubeService = require('../services/cubeService');

const cubes = require('../db.json');

router.get('/create', (req, res) => {
    res.render('create');
})

router.post('/create', async (req, res) => {
    const cube = req.body;

    //Validate
    if(cube.name.length < 2) {
        return res.status(400).send('Invalid request!');
    }
    //Save data 
    try {
        await cubeService.save(cube)
        //Redirect to page 
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id);
    res.render('details', { cube });  // moje i { ...cube } sas spread operator i posle v details shte bade samo name, imageUrl,...
})

module.exports = router;




// cubes.push(cube);
//     cubeService.save(cube)
//     .then(() => {
//         //Redirect to page 
//         res.redirect('/');
//     })

//     .catch(err => {
//         res.status(400).send(err);
//     });