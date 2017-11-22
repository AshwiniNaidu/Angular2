import { Component } from '@angular/core';

@Component({
    selector: 'random-quote',
    template: `
    <style>
    .quoteLine {
        color: #999999; 
    }
    </style>
        <div>
             <h2>Random Quote</h2>
            <p class="quoteLine">{{quote.line}}</p>  <p class="quoteAuth"> - {{quote.author}}</p>
            </div>`,
    styles: [`.quoteLine {
        color: #ff0000;
    }
    .quoteAuth {
        font-weight: bold;
    }
    `]
})

export class RandomQuoteComponent{
    quotes: Object[] = [{
        "line": "Walking on water and developing software from a specification are both easy, provided they are frozen.",
        "author": "Chris Hemsworth"
    },
    {
        "line": "Nine people can't make a baby in a month.",
        "author": "Henry Williams"
    }
]
randomIndex: number = Math.floor(Math.random() * this.quotes.length);
quote: object = this.quotes[this.randomIndex] ;
    constructor() {
    }
}