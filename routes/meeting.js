const router = require('express').Router();
const meetingController = require('../controllers/meeting');
const meetingValidators = require('../validators/meetingValidator');

router.post('/', async (req, res) => {
    const { error } = meetingValidators.validateMeetTimes(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const response = await meetingController.pickDateTime(req.body);
    if(response instanceof Error) return res.status(500).send(response.message);
    return res.status(200).send(response);
});

module.exports = router;
