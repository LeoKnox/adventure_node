const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Character');
    });

    router.post('/', (req, res, next) => {
        return res.send('Character update sent');
    });

    return router;
};