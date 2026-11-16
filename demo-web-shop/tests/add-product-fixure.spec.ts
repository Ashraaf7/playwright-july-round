import { test } from './fixtures/myFixure';




test('Add product to cart', async ({ login }) => {
    console.log('User is logged in');
});



test('verify product in cart', async ({ home }) => {
    // Verify product in cart
    await home.expectProductInCart('1');
});
