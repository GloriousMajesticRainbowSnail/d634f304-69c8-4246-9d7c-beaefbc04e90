import * as productActions from '@app/modules/actions/product.actions';
import { Product } from '@app/modules/product/models/product.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// tslint:disable-next-line: no-empty-interface
export interface State extends EntityState<Product> {}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = productAdapter.getInitialState();

export function productReducer(
  state: State = initialState,
  action: productActions.ProductActions
) {
  switch (action.type) {
    // Add retrieved product to store
    case productActions.GET_PRODUCT_SUCCEEDED:
      return productAdapter.addOne(action.product, state);
    default:
      return state;
  }
}

export const getProductsState = createFeatureSelector<State>('product');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = productAdapter.getSelectors(getProductsState);
