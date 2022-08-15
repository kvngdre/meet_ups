const router = require('express').Router();
const meetingController = require('../controllers/meeting');
router.post('/', async (req, res) => {
    const response = await meetingController.pickDateTime(req.body);

    return res.status(200).send(response)
})


module.exports = router;