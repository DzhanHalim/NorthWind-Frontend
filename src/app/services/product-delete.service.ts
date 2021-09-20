import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { SingleResponseModel } from '../models/singleResponseModoel';

@Injectable({
  providedIn: 'root'
})
export class ProductDeleteService {

  apiUrl:string="https://localhost:5001/api/"

  constructor(private httpClient:HttpClient) { }

  deleteProduct(product:Product):Observable<SingleResponseModel<Product>>{
    return this.httpClient.post<SingleResponseModel<Product>>(this.apiUrl+"products/delete",product);
  }
}
