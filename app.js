'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Sequelize = require('sequelize');

app.set('models', require('./models'));
const { Beach, Castle, Lifeguard, Tool } = app.get('models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/beaches', (req, res, next) => {
    Beach.findAll({
        include: [{ model: Lifeguard, attributes: [[Sequelize.fn('concat', Sequelize.col('first_name'), ' ', Sequelize.col('last_name')), 'name']] }]
    })
    .then(beaches => res.status(200).json(beaches))
    .catch(err => res.status(500).json(err));
});

app.get('/beaches/:id', (req, res, next) => {
    Beach.findOne({
        raw: true,
        where: { id: req.params.id },
        include: [{ model: Lifeguard, attributes: [[Sequelize.fn('concat', Sequelize.col('first_name'), ' ', Sequelize.col('last_name')), 'name']] }]
    }).then(beach => res.status(200).json(beach))
        .catch(err => res.status(500).json(err));
});

app.get('/lifeguards', (req, res, next) => {
    Lifeguard.findAll({
        raw: true,
        include: [{ model: Beach, attributes: ['name'] }]
    })
    .then(guards => res.status(200).json(guards))
    .catch(err => res.status(500).json(err));
});

app.get('/lifeguards/:id', (req, res, next) => {
    Lifeguard.findOne({
        raw: true,
        where: { id: req.params.id },
        include: [{ model: Beach, attributes: ['name'] }]
    })
    .then(guard => res.status(200).json(guard))
    .catch(err => res.status(500).json(err));
});

app.get('/sandcastles', (req, res, next) => {
    Castle.findAll()
    .then(castles => res.status(200).json(castles))
    .catch(err => res.status(500).json(err));
});

app.get('/sandcastles/:id', (req, res, next) => {
    Castle.findOne({
        raw: true,
        where: { id: req.params.id },
    })
    .then(castle => res.status(200).json(castle))
    .catch(err => res.status(500).json(err));
});

app.get('/tools', (req, res, next) => {
    Tool.findAll()
    .then(tools => res.status(200).json(tools))
    .catch(err => res.status(500).json(err));
});

app.get('/tools/:id', (req, res, next) => {
    Tool.findOne({
        raw: true,
        where: { id: req.params.id },
    })
    .then(tool => res.status(200).json(tool))
    .catch(err => res.status(500).json(err));
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;