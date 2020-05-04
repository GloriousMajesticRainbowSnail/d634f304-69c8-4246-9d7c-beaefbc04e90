import { ActionReducerMap } from '@ngrx/store';
import * as fromProduct from '@product/product.reducer';

export const reducers: ActionReducerMap<any> = {
    product: fromProduct.productReducer
};
