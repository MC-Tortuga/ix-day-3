import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Anime } from '../../models/anime';
import { CartProvider } from '../../providers/cart/cart.service';
import { CartPage } from '../cart/cart';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  selectedAnime: Anime;
  flag: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartProvider) {
    this.selectedAnime = navParams.get("anime");

  }


  toggle() {
    this.flag = !this.flag
  }


  toCartPage(){
    this.navCtrl.push(CartPage);
  }
  addToCart(anime: Anime) {
    this.cartService.addToCart(anime);
    this.navCtrl.pop();
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
