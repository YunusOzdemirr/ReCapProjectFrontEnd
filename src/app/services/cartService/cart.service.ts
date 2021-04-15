import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car/car';
import { CartItem } from 'src/app/models/cartItem/cartitem';
import { CartItems } from 'src/app/models/cartItem/cartitems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car: Car) {
    let item = CartItems.find(c => c.car.carId === car.carId);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
}

