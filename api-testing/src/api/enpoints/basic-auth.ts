import { APIRequestContext } from '@playwright/test';

const BASIC_AUTH_ENDPOINT = '/basic_auth';

async function basicAuth(request: APIRequestContext, body: any) {
    const response = await request.get(BASIC_AUTH_ENDPOINT, {
        headers: {
            'Authorization': `Basic ${Buffer.from(`${body.username}:${body.password}`).toString('base64')}`
        }
    });
    console.log(await response.text());
    return response;
}


export { basicAuth };