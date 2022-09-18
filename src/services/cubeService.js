const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

//exports.getAll = () => cubes;
exports.getAll = (search = '', from = 0, to = 6) => {  //tuk move da gi slojish i default-ni stoinosti (search = '', from = 0, to = 6). Kogato search = '' nqma nujda ot optional chaining proverka (search?.toLowerCase() || '')
    const result = cubes
    .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to)
    // .filter(x => x.difficultyLevel < to)
    
    return result;
}
exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    //cubes.push(cube);
    cubes.push({id: cubes[cubes.length - 1].id + 1, ...cube});
    let textData = JSON.stringify(cubes, '', 4);
    // console.log(path.resolve('src', 'db.json'))
    return fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'})
    
}