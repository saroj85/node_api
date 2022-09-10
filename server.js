const dotenv = require('dotenv');
const path = require('path');

const env_file_name = path.join(__dirname,'.env');
require('dotenv').config({ path: env_file_name });


const app = require('./app');
const { LOGS_LEVEL } = require('./utils/constants');
const { log } = require('./utils/log');

const port = process.env.PORT || 8080;

//  Starting the server
app.listen(port, () => {
    log(`Listening on Port ${port}`, LOGS_LEVEL.DESCRIPTION);
});
