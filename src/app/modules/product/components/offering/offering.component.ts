import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'offering',
    templateUrl: 'offering.component.html'
})
export class OfferingComponent {
    @Input()
    product: Product;

    constructor() {
    }
}

