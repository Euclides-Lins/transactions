const request = require('supertest');
const app = require('../src/app');

test('Should response at the root', () => request(app).get('/').then((res) => {
  expect(res.status).toBe(200);
}));
