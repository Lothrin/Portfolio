import { Component } from '@angular/core';
import { IProduct } from '../../products.model';
import { products } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-exam3products',
  templateUrl: './exam3products.component.html',
  styleUrl: './exam3products.component.css'
})
export class Exam3productsComponent {
  products: IProduct[];

  constructor(private cartService: CartService
  ){
    this.products = products;
    
  }
  addToCartPro(product: IProduct, index: number){
    this.cartService.addToCartPro(product, index);
  }
}
