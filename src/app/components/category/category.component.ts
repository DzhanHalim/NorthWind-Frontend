import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys:Category[]=[];
  currentCategory :Category;
  dataLoaded:boolean=false;
  constructor(private categoryService:CategoryService, private authService:AuthService) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys(){
    this.categoryService.getCategorys().subscribe(response=>{
      this.categorys=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentCategory(category:Category){
    this.currentCategory=category;
  }

 
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return"list-group-item active"
    }
    else{
      return"list-group-item"

    }
  }

   
  getAllCategoryClass(){
    if(!this.currentCategory){
      return"list-group-item active"
    }
    else{
      return"list-group-item"
    }
  }
}
