import { Component, Input } from '@angular/core';

@Component({
    selector: 'badges',
    templateUrl: 'badges.component.html'
})
export class BadgesComponent {
    @Input()
    badges: string[];

    constructor() {
    }

    // Dynamically constructs SVG url for the given badge ID (e.g. badge-ECO)
    getBadgeUrl(badgeId: string) {
        return `/assets/icons/product-en-sprite/svg/symbols.svg#${badgeId}`;
    }
}

