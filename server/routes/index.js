const express = require('express');

const router = express.Router();

const classesRoute = require('./classes');
const characterRoute = require('./character');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    router.use('/classes', classesRoute());
    router.use('/character', characterRoute());

    return router;
};