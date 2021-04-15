import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem/cartitem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems: CartItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
