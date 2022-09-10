const { db } = require('../models');
const { find_all, save, delete_data, update, find_by_id } = require('../dal');
const response_helper = require('../utils/res.helper');
const { log } = require('../utils/log');
const { LOGS_LEVEL } = require('../utils/constants');


const get_all_hourly_data = async (req, res) => {
    try {

        // console.log("======", process.env.HOST)
        const all_hourly_data = await find_all(db.hourly_services);

        response_helper.success(res, 200, all_hourly_data, 'Fetch Successful', undefined, undefined);

    } catch (error) {
        log('Getting Hourly' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting All Hourly');
    }
};


const save_hourly_data = async (req, res) => {
    try {

        const { body } = req;
        const hourly_data = body;

        const saved_hourly_data = await save(db.hourly_services, hourly_data);

        response_helper.success(res, 200, saved_hourly_data, 'Saved Successful', undefined, undefined);
    } catch (error) {
        log('Saving Hourly' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Saving Hourly Error');
    }
};


const get_hourly_by_id = async (req, res) => {

    const id = req.query.id;

    try {

        const hourly_data = await find_by_id(db.hourly_services, id);

        response_helper.success(res, 200, hourly_data, 'Fetch Successful', undefined, undefined);

    } catch (error) {

        log('Getting Hourly By Id' + error, LOGS_LEVEL.ERROR);
        response_helper.error(res, error, error.code ? error.code : 404, 'Getting Hourly  By Id');
    }
};

module.exports.save_hourly_data = save_hourly_data;
module.exports.get_all_hourly_data = get_all_hourly_data;
module.exports.get_hourly_by_id = get_hourly_by_id;