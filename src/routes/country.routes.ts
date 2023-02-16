import { Router } from 'express';

const router = Router();

// const countryCtrlFuncs = require('../controllers/countryController');

// router.get('/', async (req, res) => {
//     const response = await countryCtrlFuncs.getAll();
//     if (response instanceof Error)
//         return res.status(404).send(response.message);

//     return res.status(200).send(response);
// });

export default router;