import { Component, Input } from '@angular/core';

@Component({
    selector: 'promo-box',
    templateUrl: 'promo-box.component.html'
})
export class PromoBoxComponent {
    @Input()
    promo: string;

    constructor() {
    }
}

