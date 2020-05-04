import { Action } from '@ngrx/store';
import { Product } from '../product/models/product.model';

export const GET_PRODUCT = '[Product] Get Product';
export const GET_PRODUCT_SUCCEEDED = '[Product] Get Product Succeeded';

// Action to GET an individual product by SKU
export class GetProduct implements Action {
  readonly type = GET_PRODUCT;

  constructor(public id: string) {}
}

// Action to update store when a product has been retrieved
export class GetProductSucceeded implements Action {
    readonly type = GET_PRODUCT_SUCCEEDED;

    constructor(public product: Product) {}
}

// Upgrade to PRO for the GetProductFailed action!

export type ProductActions = GetProduct | GetProductSucceeded;
