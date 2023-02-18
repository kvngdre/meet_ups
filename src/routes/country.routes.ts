import { Router } from 'express';
import CountryController from '../controllers/country.controller';
import validateId from '../middleware/validateId';

const router = Router();

router.post('/new', CountryController.createCountry);

router.get('/', CountryController.getAllCountries);

router.get('/:id', [validateId], CountryController.getCountry);

router.patch('/:id', [validateId], CountryController.updateCountry);

router.delete('/:id', [validateId], CountryController.deleteCountry);

export default router;
