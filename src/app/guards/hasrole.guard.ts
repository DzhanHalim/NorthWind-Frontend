import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class HasroleGuard implements CanActivate {

  
  constructor(private authService:AuthService,private router:Router, private userSrvice:UserService,private toastrService:ToastrService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
       if(this.authService.getUser(localStorage.getItem("token")).roles!=null){
        if(this.authService.getUser(localStorage.getItem("token")).roles.includes(route.data.role2)){
          return true;
       }
       return false;
         
      
        
      }
            
      this.router.navigate(["products"]);
      this.toastrService.error("You dont have permission", "Error");
            return   false;
          
         
           
        
         

   
 
        
       

     
  }
  
}
