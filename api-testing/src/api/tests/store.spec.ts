import { test, expect, APIRequestContext } from '@playwright/test';
import { StoreEndpoints } from '../enpoints/store-endpoints';
let storeEndpoints = new StoreEndpoints();
test.use({ baseURL: 'https://simple-grocery-store-api.click' });
test('Create new order', async ({ request }) => {

    //register new client
    const clientData = {
        "clientName": `automationClient${Date.now()}`,
        "clientEmail": `automationClient${Date.now()}@test.com`
    }
    const registerResponse = await storeEndpoints.registerClient(request, clientData);
    const registeredClient = await registerResponse.json();
    const token = registeredClient.accessToken;

    //create new cart
    const cartResponse = await storeEndpoints.createCart(request);
    const cart = await cartResponse.json();
    const cartId = cart.cartId;

    //add item to cart
    await storeEndpoints.addItemToCart(request, cartId, '5477');

    //create new order
    const requestBody = {
        cartId: cartId,
        customerName: clientData.clientName
    };
    const orderResponse = await storeEndpoints.createOrder(request, token, requestBody);
    const order = await orderResponse.json();
    expect(order.created).toBeTruthy();
});