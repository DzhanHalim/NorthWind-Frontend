import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
 
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private authtService: AuthService,
     private toastService:ToastrService, 
     private userService:UserService,
       ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email : ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
       

      let loginModel= Object.assign({},this.loginForm.value);
    
      this.authtService.login(loginModel).subscribe(data=>{
        localStorage.setItem("token",data.data.token);
        this.authtService.user=this.authtService.getUser(localStorage.getItem("token"))
       
        console.log(this.authtService.user)
        // let obj = this.jwtHelper.decodeToken(this.authtService.token);
        // console.log(obj);
     



        // this.userService.getUserByEmail(this.authtService.user.email).subscribe(data=>{
        //   this.authtService.authUser=data.data; 
          
        //   this.authtService.getClaims(this.authtService.authUser).subscribe(data2=>{
        //    this.authtService.claims=data2.data;
           
        //    console.log(this.authtService.claims);
    
        //   })
        
         
        // })
      this.toastService.success(data.message,"Success");
      },reponse=>{
       this.toastService.error(reponse.error,"Error");
      })
     
      
    }
  }
}
