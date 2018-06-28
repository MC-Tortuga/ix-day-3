import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Anime } from '../../models/anime';
import { PaymentPage } from '../payment/payment';
import { CartProvider } from '../../providers/cart/cart.service';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart: Anime[];
  total: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartProvider) {
  }

  ionViewDidLoad() {
    this.cart = this.cartService.cartItems;

    this.cart.forEach(item => {
      this.total += item.price;

    });
    console.log('ionViewDidLoad CartPage');
  }

  toPaymentScreen() {
    this.navCtrl.push(PaymentPage, {
      price: this.total
    });
  }

}
