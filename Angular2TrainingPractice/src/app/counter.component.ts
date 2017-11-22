import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'CounterComponent',
    inputs: ['counter'],
    outputs: ['counterChanged'],
    template: `
    <span> Inputs/Outputs Property in Component decorator </span>
    <div (click)='counterEvent()'>
    Click
    </div>`
})

export class CounterComponent {
    counter: number;
    public counterChanged = new EventEmitter();
    counterEvent(e:Event) {
        this.counterChanged.emit(this.counter);
        this.counter++;
    }
}