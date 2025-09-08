// /api/server.js
const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Serveer statische bestanden uit 'web' folder
app.use(express.static(path.join(__dirname, '../web')));

// Optioneel: root redirect
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../web/index.html'));
});

module.exports.handler = serverless(app);
