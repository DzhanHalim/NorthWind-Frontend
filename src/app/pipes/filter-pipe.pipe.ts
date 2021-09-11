import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    // if filterText is not null then make it lowercase
    filterText= filterText?filterText.toLocaleLowerCase():"";
    //if value is not null then make the productName lowercase and search for the filterText in all productNames(going to return bool)
    // if value is null then return value without filtering.

    //!==-1 means if the starting index is not -1. So the starting index should be 0 or greather.
    // Javascript return -1 if he cant find the filterText in any index of the ProductName. 
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
