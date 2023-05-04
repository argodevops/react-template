const express = require('express');
const path = require('path');

module.exports = function (app) {
    app.use('/config', express.static(path.join(__dirname, 'config')));
};
