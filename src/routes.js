const express = require('express');
const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController.js');

const router = express.Router();

//tuk se izpolzvat dve konvencii 
router.get('/', homeController.index);      //tuk kazvame koi action na koi route da otgovarq 
router.get('/about', homeController.about);  //tuk kazvame koi action na koi route da otgovarq 

router.use('/cube', cubeController);  // a tuk se delegira vsichki requests kam /cube da se zanimava s tqh kontrolera 


module.exports = router;



// module.exports = (app) => {
//     app.get('/', homeController.index);
// }