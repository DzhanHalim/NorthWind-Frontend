import { Injectable } from '@angular/core';
// to request backend api to get the data 
 
 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://localhost:5001/api/";
  constructor(private httpClient: HttpClient) { }
 
  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getall";
    //using httpclient to connect to the api
   return this.httpClient
    // we use the get method of the api and we want in return ProductResponseModel
    .get<ListResponseModel<Product>>(newPath);
    // the data that we get from the api is now inserted to the response variable
   // .subscribe((response)=>{
      // assignt the data to the entities of products
     // this.products=response.data
    }

    getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId;

      return this.httpClient.get<ListResponseModel<Product>>(newPath);
    }
}
