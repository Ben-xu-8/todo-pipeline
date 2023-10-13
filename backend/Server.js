const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();

const PORT = process.env.port || 5000;

const _dirname = path._dirname('');
const buildPath = path.join(_dirname, '../frontend/build');

app.use(express.static(buildPath));

app.get('/', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../frontend/build/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(routes);

//Listening to Port
app.listen(PORT, () => console.log(`Listening to ${PORT}`));
