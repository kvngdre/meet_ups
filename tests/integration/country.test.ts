// let server;
// const request = require('supertest');
// const Country = require('../../models/countryModel');

// describe('/api/countries', () => {
//     beforeAll(() => {
//         server = require('../../index');
//     });
//     afterAll(async () => {
//         await Country.deleteMany({});
//         server.close();
//     });
//     describe('GET /', () => {
//         it('should return all supported countries', async () => {
//             await Country.insertMany([
//                 {
//                     countryCode: 'AA',
//                     countryName: 'country 1',
//                     timeZone: 'Continent1/City1',
//                     offset: '+01:00',
//                 },
//                 {
//                     countryCode: 'AB',
//                     countryName: 'country 2',
//                     timeZone: 'Continent2/City2',
//                     offset: '+02:00',
//                 },
//                 {
//                     countryCode: 'AC',
//                     countryName: 'country 3',
//                     timeZone: 'Continent3/City3',
//                     offset: '+03:00',
//                 },
//                 {
//                     countryCode: 'AD',
//                     countryName: 'country 4',
//                     timeZone: 'Continent4/City4',
//                     offset: '+04:00',
//                 },
//             ]);
//             const response = await request(server).get('/api/countries');

//             expect(response.status).toBe(200);
//             expect(response.body.length).toBe(4);
//             expect(
//                 response.body.some((country) => (country.name = 'AA'))
//             ).toBeTruthy();
//         });
//     });
// });
