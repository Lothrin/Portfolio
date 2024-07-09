import { Component } from '@angular/core';
import { IProduct } from '../../products.model';
import { products } from '../../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-exam3details',
  templateUrl: './exam3details.component.html',
  styleUrl: './exam3details.component.css'
})
export class Exam3detailsComponent {
  products: IProduct[];
  product: IProduct;
 
  constructor(private route: ActivatedRoute,
    private cartService: CartService
  ){
    this.products = products;
    const id = +this.route.snapshot.params['id']
    this.product = this.products[id];
    
  }
  addToCart(){
    this.cartService.addToCart(this.product)
  }

}
