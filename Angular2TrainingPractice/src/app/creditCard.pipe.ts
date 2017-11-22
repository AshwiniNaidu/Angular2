import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'creditCard'
})

export class CreditCardPipe implements PipeTransform {
    transform(value: number): string {
        if(value.toString().length == 15 && value.toString().startsWith('3', 0)) {
            return "American Express";
        } 
        else if(value.toString().length == 16 && value.toString().startsWith('4', 0)) {
            return "Visa";
        }
        else if(value.toString().length == 16 && value.toString().startsWith('5', 0)) {
            return "Master Card";
        } else {
            return;
        }
    }
}