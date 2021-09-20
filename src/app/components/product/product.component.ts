import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductDeleteService } from 'src/app/services/product-delete.service';

 
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  filterText="";
  dataLoaded:boolean=false;
  products: Product[] = [];
   
   
  constructor(private productService:ProductService, 
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService,
    private cartService:CartService ,
    private authService:AuthService,
    private porudctDeleteService:ProductDeleteService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }
      else{
        this.getProducts();
         
      }
    })
  }
   hasRole(){
     return this.authService.hasRole();
   }
  getProducts() {
    this.productService.getProducts().subscribe((response) =>{
      this.products=response.data;
      this.dataLoaded=true;
    });
    }
    getProductsByCategory(categoryId:number) {
      this.productService.getProductsByCategory(categoryId).subscribe((response) =>{
        this.products=response.data;
        this.dataLoaded=true;
      });
      }

      addToCart(product:Product){
   
       this.toastrService.success("Successfully added",product.productName);
       this.cartService.addToCart(product);      
      }

      deleteProduct(product:Product){
        let result = confirm('are you sure you want to delete this product ?');
        if(result==true){
          this.porudctDeleteService.deleteProduct(product).subscribe(data=>{
            this.toastrService.success(data.message,"Success");
          },response=>{
            this.toastrService.success(response.message,"Error");
  
          })
        }
         
        
       
      }
      
  }

  


