const express = require('express');

const app = express();

app.use('/static', express.static('public')); //tova e kato middleware koito tarsi dali ima daden fail v public

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(5000, () => console.log('App is listeting on port 5000...'));