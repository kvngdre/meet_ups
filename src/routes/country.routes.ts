import { Router } from 'express';
import CountryController from '../controllers/country.controller';

const router = Router();

router.post('/new', CountryController.createCountry);

router.get('/', CountryController.getAllCountries);

router.get('/:id', CountryController.getCountry);

router.patch('/:id', CountryController.updateCountry);

router.delete('/:id', CountryController.deleteCountry);

export default router;
