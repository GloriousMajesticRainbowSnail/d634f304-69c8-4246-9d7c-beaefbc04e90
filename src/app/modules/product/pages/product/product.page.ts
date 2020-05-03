import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage {
    // Use the URL id to retrieve the specific product
    product$ = this.route.paramMap.pipe(
        map(params => params.get('id')),
        switchMap(id => this.api.getProduct(id))
    );

    constructor(private route: ActivatedRoute, private api: ApiService) {}
}

