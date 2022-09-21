import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/components/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  cartItem:number=0;

  constructor(private _cartService: CartService) {
  }
  
  getLenght(){
  this.cartItem=this._cartService.getCartLenght();
  }
}
