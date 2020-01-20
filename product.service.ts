import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   

   constructor(public name: string,
               public brand: string, 
               public description: string, 
               public price: number) {}
   
   
   getAllProducts(): Product[] {
      return new Product[this.name, this.brand, this.description, this.price]
   }
}
