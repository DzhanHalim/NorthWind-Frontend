import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { ProductAddService } from 'src/app/services/product-add.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private toastService:ToastrService,
    private productAddService:ProductAddService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm= this.formBuilder.group({
      productName:["",Validators.required],
      categoryId:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required]

    })
  }

  add(){
    if(this.productAddForm.valid){
       
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productAddService.add(productModel).subscribe(response=>{
        this.toastService.success(response.message,"Success");
      }, responseError=>{
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastService.error(responseError.error.Errors[i].ErrorMessage,"Error");
          }
        }
      })
    }
    else{
      this.toastService.error("Invalid input","Error ");
    }
  
  }
}
