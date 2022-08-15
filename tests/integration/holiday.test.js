let server;
const request = require('supertest');

describe('/api/holidays', () => {
    beforeAll(() => {
        server = require('../../index');
    });
    afterAll(async () => {
        server.close();
    });
    describe('POST / ', () => {
        it('should return the holidays of the specified input', async () => {
            const payload = {
                country_code: 'NG',
                year: 2022,
                month: 10,
                day: 1,
            };

            const response = await request(server).post('/api/holidays').send(payload)

            expect(response.status).toBe(200);
            expect(response.body.holidays.length).toBeGreaterThanOrEqual(1);
            expect(response.body.holidays[0]).toHaveProperty('name');
        });

    });
});
