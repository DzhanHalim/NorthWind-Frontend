import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  // value is the price that we are getting, rate is the parameter and number is the return type
  transform(value: number, rate:number): number {
    return value+ (value*rate/100);
  }

}
