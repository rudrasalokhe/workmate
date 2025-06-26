require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const engineerRoute = require('../product management/routes/engineer.js')

app.use('/api/v1/engineer', )