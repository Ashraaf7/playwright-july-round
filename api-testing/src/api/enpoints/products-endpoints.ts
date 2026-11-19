import { APIRequestContext } from '@playwright/test';

const PRODUCTS_ENDPOINT = '/objects';

//Create Products Endpoint
async function createProduct(request: APIRequestContext, productData: any) {
    const response = await request.post(PRODUCTS_ENDPOINT, {
        headers: {
            'Content-Type': 'application/json'
        },
        data: productData
    });
    console.log(await response.json());
    return response;
}
/******************************************************** */
//Get All Products
async function getAllProducts(request: APIRequestContext) {
    const response = await request.get(PRODUCTS_ENDPOINT);
    console.log(await response.json());
    return response;
}
/******************************************************** */
//Get Product by ID as a path parameter
async function getProductByPathID(request: APIRequestContext, productId: any) {
    const response = await request.get(`${PRODUCTS_ENDPOINT}/${productId}`);
    console.log(await response.json());
    return response;
}
/******************************************************** */
//Get Products by ID as a query parameter
async function getProductByQueryID(request: APIRequestContext, productId: any) {
    const response = await request.get(PRODUCTS_ENDPOINT, {
        params: {
            id: productId
        }
    });
    console.log(await response.json());
    return response;
}
/******************************************************** */
//Update Product
async function updateProduct(request: APIRequestContext, productId: any, productData: any) {
    const response = await request.put(`${PRODUCTS_ENDPOINT}/${productId}`, {
        data: productData
    });
    console.log(await response.json());
    return response;
}
async function updateProductPartial(request: APIRequestContext, productId: any, productData: any) {
    const response = await request.patch(`${PRODUCTS_ENDPOINT}/${productId}`, {
        data: productData
    });
    console.log(await response.json());
    return response;
}
/******************************************************** */
//Delete Product 
async function deleteProduct(request: APIRequestContext, productId: any) {
    const response = await request.delete(`${PRODUCTS_ENDPOINT}/${productId}`);
    console.log(await response.json());
    return response;
}

export default {
    createProduct,
    getAllProducts,
    getProductByPathID,
    getProductByQueryID,
    updateProduct,
    updateProductPartial,
    deleteProduct
};