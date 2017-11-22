import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive ({
    selector: '[myFirstCustomDirective]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()' 
    }
})

export class myFirstCustomDirective {
    constructor(private el: ElementRef, private ren: Renderer) {
        
    }
    onFocus() {
        this.ren.setElementStyle(this.el.nativeElement, "font-weight", "bold");
        this.ren.setElementStyle(this.el.nativeElement, "width", "200px");
    }
    onBlur() {
        this.ren.setElementStyle(this.el.nativeElement, "font-weight", "normal");
        this.ren.setElementStyle(this.el.nativeElement, "width", "100px");
    }
}