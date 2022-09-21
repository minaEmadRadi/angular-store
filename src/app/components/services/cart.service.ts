import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';//imported

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor(private _http: HttpClient) { }//  inject-Service

  removeFromCart(product: Product) {
    const Index = this.cartItems.findIndex(x => x.id === product.id);
    if (Index !== -1) {
      this.cartItems.splice(Index, 1);
      alert(product.name + " deleted");
    }
    else
      alert(product.name + " not exists");
  }//Rmove Product From Cart

  updateProductAmount(i: number, product: Product) {
    this.cartItems[i].amount = product.amount;
    alert(product.name + "Amount updated");
  }//update Amount for cart items

  addProductToCart(product: Product): void {
    const Index = this.cartItems.findIndex(x => x.id === product.id);
    if (Index !== -1) {
      this.updateProductAmount(Index, product);
    }
    else {
      this.cartItems.push(product);
      alert(product.name + " added");
      //this._snackBar.open(product.name + " added");

    }
  }//add item to cart

  getCartProducts(): Product[] {
    return this.cartItems;
  }//get cart items

  updateCartProducts(cartItem: Product): void {
    const Index = this.cartItems.findIndex(x => x.id === cartItem.id);
    this.cartItems[Index].amount = cartItem.amount;
    alert(cartItem.name + " amount updated");
  }//update Amount for cart items

  delete() {
    this.cartItems = [];
    return this.cartItems;
  }//Clear Cart Items

  public getCartLenght(): number {
    var lenght: number = this.cartItems.length;
    alert(this.cartItems.length + "lenght")
    return length;
  }//get cart lenght

}
