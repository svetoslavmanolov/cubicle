const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    //cubes.push(cube);
    cubes.push({id: cubes[cubes.length - 1].id + 1, ...cube});
    let textData = JSON.stringify(cubes, '', 4);
    // console.log(path.resolve('src', 'db.json'))
    return fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'})
    

    
}