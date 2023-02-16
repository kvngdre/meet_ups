// let server;
// const request = require('supertest');

// describe('/api/meeting-time', () => {
//     beforeAll(() => {
//         server = require('../../index');
//     });
//     afterAll(async () => {
//         server.close();
//     });
//     describe('POST / ', () => {
//         it('should return the most appropriate meeting time', async () => {
//             const payload = [
//                 {
//                     "from": "2022-10-01T09:00:00.0+08:00",
//                     "to": "2022-10-01T17:00:00.0+08:00",
//                     "country_code": "SG"
//                 },
//                 {
//                     "from": "2022-10-01T09:00:00.0+01:00",
//                     "to": "2022-10-01T17:00:00.0+01:00",
//                     "country_code": "NG"
//                 }
//             ];

//             const response = await request(server).post('/api/meeting-time').send(payload)

//             expect(response.status).toBe(200);
//             expect(response.body.result).toHaveProperty('from')
//             expect(response.body.result).toHaveProperty('to')
//         });
//     });
// });
