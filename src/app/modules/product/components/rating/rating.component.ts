import { Component, Input } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.component.html'
})
export class RatingComponent {
    @Input()
    rating: number;

    constructor() {}

   // Gets the rating width for the given rating value (to display the correct # of stars)
    getRatingWidth(rating: number): string {
        /*  The number of stars displayed is based on the width of the stars overlay.
            This is not clearly communicated in the spec, but the calculation below is
            inferred from the following examples:
            - rating of 3 -> width 60%
            - rating of 4 -> width 80%
        */
        switch (rating) {
            case 1:
                return '20%';
            case 2:
                return '40%';
            case 3:
                return '60%';
            case 4:
                return '80%';
            case 5:
                return '100%';
            default:
                // Defensive code - this line shouldn't be hit
                return '0%';
        }
    }
}

