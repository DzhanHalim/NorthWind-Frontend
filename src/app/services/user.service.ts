import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModoel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "https://localhost:5001/api/users/getbyemail";

  constructor(private httpClient:HttpClient) { }

  getUserByEmail(email:string):Observable<SingleResponseModel<User>>{

    let newPath=this.apiUrl+ '?email='+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }
}
