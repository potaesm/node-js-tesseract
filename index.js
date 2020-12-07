const express = require('express');
const cors = require('cors');

const PORT = process.env.npm_package_config_port || require('./package.json').config.port;

const { TesseractController } = require('./src/controller');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

TesseractController(app);

app.listen(PORT);
