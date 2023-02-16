const router = require('express').Router();
const holidayReqValidators = require('../validators/holidayValidator');
const holidayCtrlFuncs = require('../controllers/holidayController');

router.post('/', async (req, res) => {
    const { error } = holidayReqValidators.validateGetHoliday(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const holidays = await holidayCtrlFuncs.getHolidays(
        req.body.country_code,
        req.body.year,
        req.body.month,
        req.body.day
    );
    
    // Checking if user is connected to the internet
    if ('stack' in holidays && holidays.status == null)
        return res.status(500).status('Connection failed');

    return res.status(200).send(holidays);
});

module.exports = router;
