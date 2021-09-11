import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
 
import { observable, Observable } from 'rxjs';
import { Claims } from '../models/claims';
import { ListResponseModel } from '../models/listResponseModel';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModoel';
import { TokenModel } from '../models/tokenModel';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = "https://localhost:5001/api/auth/";
   private userEmail:string;
  
  user:User;
  authUser:User;
  claims: Claims[]=[];
  token: string;
  constructor(private httpClient:HttpClient, private userService:UserService) { 
    this.token=localStorage.getItem("token");
     
     
    
 
  }

  login(loginModel:LoginModel){
    
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
    
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      
      
      
      
    
      return true;

    
      
    }
    else{
      return false;
    }
  }
  hasRole(){
     
     
     
     
 
  }
   getClaims(user:User):Observable<ListResponseModel<Claims>>{
   let newPath: string = "https://localhost:5001/api/users/getclaims?userId=";
       
      return this.httpClient.get<ListResponseModel<Claims>>(newPath+user.id);
     
  
   }
   

   getUser(token:string) : User{
     return this.user = JSON.parse(atob(token.split('.')[1])) as User;
       
  }
}
