const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const voteRouter = require('./routers/vote');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(voteRouter);

module.exports = app;
