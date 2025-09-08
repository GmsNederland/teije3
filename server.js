<<<<<<< HEAD
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serveer alle bestanden in 'web', inclusief subfolders
app.use(express.static(path.join(__dirname, 'web')));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
=======
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serveer alle bestanden in 'web', inclusief subfolders
app.use(express.static(path.join(__dirname, 'web')));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
>>>>>>> 0ae52b6ac39f215d9963a96be2b056c70996f8b6
