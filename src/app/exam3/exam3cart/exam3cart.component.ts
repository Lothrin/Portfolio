import { Component } from '@angular/core';
import { IProduct } from '../../products.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-exam3cart',
  templateUrl: './exam3cart.component.html',
  styleUrl: './exam3cart.component.css'
})
export class Exam3cartComponent {
  cartItems: IProduct[];
  total: number;
  serviceCharge: number;
  discount: number;
  totalWithDiscount: number;


  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems
    this.total = this.cartService.getTotal();
    this.serviceCharge = this.cartService.getServiceCharge();
    this.discount = this.cartService.getDiscount();
    this.totalWithDiscount = this.cartService.getTotalWithDiscount();
  }

  onIncreaseQtty(product: IProduct){
    this.cartService.increaseQtty(product);
    this.serviceCharge = this.cartService.getServiceCharge();
    this.discount = this.cartService.getDiscount();
    this.total = this.cartService.getTotal();
    this.totalWithDiscount = this.cartService.getTotalWithDiscount();
  }
  onDecreaseQtty(product: IProduct){
    this.cartService.decreaseQtty(product);
    this.serviceCharge = this.cartService.getServiceCharge();
    this.discount = this.cartService.getDiscount();
    this.total = this.cartService.getTotal();
    this.totalWithDiscount = this.cartService.getTotalWithDiscount();
    this.cartItems = this.cartService.cartItems;
  }
  onDelete(index: number){
    this.cartService.deleteItem(index);
    this.serviceCharge = this.cartService.getServiceCharge();
    this.total = this.cartService.getTotal();
  }

}
