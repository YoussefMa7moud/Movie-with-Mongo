const express = require('express');
const app = express();
const mongoose = require('mongoose');
const movie1 = require('./models/Movie1');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(8080);
app.set('view engine', 'ejs');
app.use(express.static('public'));












app.get('/', async (req, res) => {
    const movies = await movie1.find();
    res.render('index', { data: movies });
});




app.post('/api/Movie1', async (req, res) => {
    try {
        const movie = await movie1.create(req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect("mongodb+srv://yousmahmoud7:INrMRMMoc2ZJAKtJ@Movies1.edw5t6z.mongodb.net/Creat-Acc?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected to mongo");
}).catch(() => {
    console.log("Failed");
});
