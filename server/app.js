require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routing');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(router);
app.use((req, res) => {
  res.status(404).send('Not Found');
});
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));