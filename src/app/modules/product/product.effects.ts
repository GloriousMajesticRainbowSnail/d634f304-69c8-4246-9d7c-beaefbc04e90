import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GetProduct, GetProductSucceeded, GET_PRODUCT } from '../actions/product.actions';

@Injectable()
export class ProductEffects {
    // Handles the GET_PRODUCT action (to get an individual product)
    @Effect()
    getProduct$ = this.actions$
    .ofType<GetProduct>(GET_PRODUCT)
    .pipe(
        map(action => action.id),
        // For demonstration purposes; this will only log once per SKU
        tap(id => console.log(`GET products/${id}`)),
        switchMap(id => this.api.getProduct(id).pipe(
            map(product => new GetProductSucceeded(product))
        ))
    );

    constructor(private actions$: Actions, private api: ApiService) {}
}
