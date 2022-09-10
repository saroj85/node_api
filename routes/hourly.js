const router = require('express').Router();
const hourly_controller = require('../controllers/hourly');

router
    .post('/save', (req, res) => hourly_controller.save_hourly_data(req, res))
    .get('/get', (req, res) => hourly_controller.get_all_hourly_data(req, res))
    .post('/get_by_id', (req, res) => hourly_controller.get_hourly_by_id(req, res))


module.exports = router;