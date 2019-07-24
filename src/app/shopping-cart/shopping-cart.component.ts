import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items;
  
  
  constructor(private cartService: CartService){
    this.items = this.cartService.getItems();
   }

  ngOnInit() {
    console.log(this.cartService.getItems());
  }

}
