const config = require('config');
const request = require('supertest');
const server = require('../../index');

describe('/api/countries', () => {
    beforeEach( () => {
        server = require('../../index')
    })
    afterEach( () => {
        server.close();
    })
    describe('GET /', () => {
        it('should return all supported countries', async () => {
            const response = await request(server).get('/api/countries');
            expect(response.status).toBe(200)
        })
    })

})