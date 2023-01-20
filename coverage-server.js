// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, 'coverage/lcov-report/')));

const port = 1235;

app.listen(port, () => console.log(`http://localhost:${port}`));
