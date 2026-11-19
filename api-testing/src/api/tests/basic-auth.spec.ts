import { test, expect } from '@playwright/test';
import { basicAuth } from '../enpoints/basic-auth';
import basicAuthData from '../test-data/basic-auth.json';

test.use({ baseURL: 'https://the-internet.herokuapp.com' })
test('Basic Auth', async ({ request }) => {
    const response = await basicAuth(request, basicAuthData);
});