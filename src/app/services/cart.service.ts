import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor () {}

    items = [];

    addToCart(product) {
        this.items.push(product);
    }

    deleteToCart() {
        this.items.splice(this.items.length-1, 1);
      }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }


}