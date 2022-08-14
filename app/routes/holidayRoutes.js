const router = require('express').Router();
const holidayCtrlFuncs = require('../controllers/holidayController');

router.post('/', async (req, res) => {
    const holidays = await holidayCtrlFuncs.getHolidays(
        req.body.country_code,
        req.body.year,
        req.body.month,
        req.body.day
    );

    if ('stack' in holidays && holidays.status == null)
        return res.status(500).status('Connection failed');

    return res.status(200).send(holidays);
});

module.exports = router;
