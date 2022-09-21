import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/components/services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product = new Product;
  @Output() addToCartP: EventEmitter<Product> = new EventEmitter;
  @Input() amountSelected: number = 1;
  public cartItemsNum: number = 0;

  constructor(private router: Router, private _cartService: CartService) {
  }

  ngOnInit(): void {

  }
  add(product: Product) {
    product.amount = this.amountSelected;
    this.addToCartP.emit(product);
  }

  onChange(value: number) {
    this.amountSelected = value;
  }
  getCartItemsNumber(): void {
    this.cartItemsNum = this._cartService.getCartLenght();
  }
  /*
   ProductSelectedDetails(product: Product):void {
     this.router.navigate(['product/id', { product: product.id }]);
  }
  */
}

