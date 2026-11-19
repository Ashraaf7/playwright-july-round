import { APIRequestContext } from '@playwright/test';

export class StoreEndpoints {

    private REGISTERATION_ENDPOINT = '/api-clients';
    private CART_ENDPOINT = '/carts';
    private ITEMS_ENDPOINT = '/items';
    private ORDERS_ENDPOINT = '/orders';

    //constructor
    constructor() { }

    //Register new client
    async registerClient(request: APIRequestContext, clientData: any) {
        const response = await request.post(this.REGISTERATION_ENDPOINT, {
            data: clientData
        });
        console.log(await response.json())
        return response;
    }

    //Create new cart
    async createCart(request: APIRequestContext) {
        const response = await request.post(this.CART_ENDPOINT);
        console.log(await response.json())
        return response;
    }

    //Add item to cart
    async addItemToCart(request: APIRequestContext, cartId: string, productID: any) {
        const response = await request.post(`${this.CART_ENDPOINT}/${cartId}/items`, {
            data: {
                productId: productID
            }
        });
        console.log(await response.json())
        return response;
    }

    //Create new order(Authenticated)
    async createOrder(request: APIRequestContext, token: string, requestBody: any) {
        const response = await request.post(this.ORDERS_ENDPOINT, {
            data: requestBody,
            headers: {
                'Authorization': `Bearer ${token}`
            }

        });
        console.log(await response.json())
        return response;
    }
}