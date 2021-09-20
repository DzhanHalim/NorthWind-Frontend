import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { HasroleGuard } from './guards/hasrole.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard,HasroleGuard],
  data:{
    role:'admin',
    role2:'moderator'
  }
},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
