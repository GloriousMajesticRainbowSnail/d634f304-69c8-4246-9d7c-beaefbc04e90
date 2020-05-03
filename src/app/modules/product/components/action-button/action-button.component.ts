import { Component, Input } from '@angular/core';

@Component({
    selector: 'action-button',
    templateUrl: 'action-button.component.html'
})
export class ActionButtonComponent {
    @Input()
    action: string;

    constructor() {
    }
}

