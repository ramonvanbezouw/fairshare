import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return `${value.toFixed(2)} €`;
  }

}
