const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('All Classes');
    });

    router.get('/:class', (req, res, next) => {
        return res.send(`Detail page for class ${req.params.class}`);
    });

    return router;
};