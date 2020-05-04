import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProduct } from '@app/modules/actions/product.actions';
import { Dictionary } from '@ngrx/entity';
import { createSelector, Store } from '@ngrx/store';
import * as fromProduct from '@product/product.reducer';
import { map, switchMap, tap } from 'rxjs/operators';
import { Product } from '../../models/product.model';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage {
    // Use the URL id to retrieve the specific product
    product$ = this.route.paramMap.pipe(
        map(params => params.get('id')),
        switchMap(id => this.store.select(this.selectProductById, {id: id}).pipe(
            // if no product was selected, dispatch a GET request
            tap(product => {
                if (!product) {
                    this.store.dispatch(new GetProduct(id));
                }
            })
        )
    ));

    // Derived selector to retrieve product by ID (from store)
    selectProductById = createSelector(fromProduct.selectEntities, (entities: Dictionary<Product>, props: {id: string}) => {
        return entities[props.id];
    });

    constructor(private route: ActivatedRoute, private store: Store<fromProduct.State>) {}
}

