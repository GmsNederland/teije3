const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serveer alle bestanden in 'web', inclusief subfolders
app.use(express.static(path.join(__dirname, 'web')));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
