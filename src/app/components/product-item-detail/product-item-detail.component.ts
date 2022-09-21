import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product;
  amountSelected: number = 1;
  id: number = 1;

  constructor(
    private _productService: ProductService,
    private _cartService: CartService,
    private _route: ActivatedRoute) {

    this.id = Number(this._route.snapshot.paramMap.get('product'));

  }
  ngOnInit(): void {
    this.id = Number(this._route.snapshot.paramMap.get('product'));//get product id from url 
    this._productService.getProductById(this.id)
      .subscribe(products => products.length !== 0 ? this.product = products[0] : undefined);
  }

  removeFromCartAction(product: Product) {
    this._cartService.removeFromCart(product);
  }

  onChange(value: number) {
    this.amountSelected = value;
  }

  add(product: Product) {
    product.amount = this.amountSelected;
    this._cartService.addProductToCart(product);
  }

}
