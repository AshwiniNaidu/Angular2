import { Component } from '@angular/core';

@Component ({
    selector: 'round-border',
    template: `
        <div style="border: 2px solid green; border-radius: 2px; box-shadow: 4px 4px 4px #999;">
            <ng-content></ng-content>
        </div>
    `
})

export class RoundBorderComponent {
    
}