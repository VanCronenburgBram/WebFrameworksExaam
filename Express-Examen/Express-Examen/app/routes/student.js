var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) return console.log(err);
    db = database.db('exam');
})

router.post('/add', (req, res) => {
    let student = { naam: req.body.naam, geboortedatum: req.body.geboortedatum, studierichting: req.body.studierichting};

    db.collection('studenten').findOne(student, (err, result) => {
        if (result) {
            console.log("Bestaat al!");
        }
        else{
            db.collection('studenten').insertOne({ naam: req.body.naam, geboortedatum: new date(req.body.geboortedatum), studierichting: req.body.studierichting }, (err, result) => {
                if (err) return
                res.redirect('/')
            })
        }
    }) 
})