import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductRespnseModel extends ResponseModel {
    data:Product[]
    
}