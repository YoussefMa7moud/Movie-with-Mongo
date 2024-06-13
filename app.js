
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const firstmovie = require('./models/Movie1');
const secondmovie = require('./models/Movie2');
const thirdmovie = require('./models/Movie3');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const movies1 = await firstmovie.find();
    const movies2= await secondmovie.find();
    const movies3= await thirdmovie.find();
   res.render('index', { data1: movies1, data2: movies2, data3: movies3 });

});

mongoose.connect("mongodb+srv://yousmahmoud7:INrMRMMoc2ZJAKtJ@Movies1.edw5t6z.mongodb.net/Creat-Acc?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected to mongo");
}).catch(() => {
    console.log("Failed");
});

app.post('/api/Movie1', async (req, res) => {
    try {
        const movie = await firstmovie.create(req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/Movie2', async (req, res) => {
    try {
        const mov2 = await secondmovie.create(req.body);
        res.status(200).json(mov2);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/Movie3', async (req, res) => {
    try {
        const mov3 = await thirdmovie.create(req.body);
        res.status(200).json(mov3);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


