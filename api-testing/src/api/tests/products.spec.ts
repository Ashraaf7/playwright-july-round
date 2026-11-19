import { test, expect } from '@playwright/test';
import productsEndpoints from '../enpoints/products-endpoints';
import productData from '../test-data/products.json';

//Create Product Test
test('Create Product', async ({ request }) => {
    const response = await productsEndpoints.createProduct(request, productData.toBeCreated);
    const responseBody = await response.json();
    await expect(response).toBeOK();
    expect(responseBody.name).toBe(productData.toBeCreated.name) //non-retring

});
//Get All Products Test
test('Get All Products', async ({ request }) => {
    const response = await productsEndpoints.getAllProducts(request);
});
//Get Product by Path ID Test
test('Get Product by Path ID', async ({ request }) => {
    const response = await productsEndpoints.getProductByPathID(request, productData.toBeGet.productId);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(productData.toBeGet.expectedName);
});
//Get Product by Query ID Test
test('Get Product by Query ID', async ({ request }) => {
    const response = await productsEndpoints.getProductByQueryID(request, productData.toBeGet.productId);
    const responseBody = await response.json();
    expect(responseBody[0].name).toBe(productData.toBeGet.expectedName);
});
//Update Product Test
test('Update Product', async ({ request }) => {
    const response = await productsEndpoints.updateProduct(request, productData.toBeUpdated.productId, productData.toBeUpdated.updateData);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(productData.toBeUpdated.updateData.name);
});
//Update Product Partial Test
test('Update Product Partial', async ({ request }) => {
    const response = await productsEndpoints.updateProductPartial(request, productData.toBeUpdatedPartial.productId, productData.toBeUpdatedPartial.updateData);
    const responseBody = await response.json();
    expect(responseBody.data.price).toBe(productData.toBeUpdatedPartial.updateData.data.price);
});
//Delete Product Test
test('Delete Product', async ({ request }) => {
    const responseCreate = await productsEndpoints.createProduct(request, productData.toBeDeleted);
    const productId = (await responseCreate.json()).id;
    const response = await productsEndpoints.deleteProduct(request, productId);
    const responseBody = await response.json();
    const expectedResponse = {
        "message": `Object with id = ${productId} has been deleted.`
    }
    expect(responseBody).toEqual(expectedResponse);
});


