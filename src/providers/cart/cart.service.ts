
import { Injectable } from '@angular/core';
import { Anime } from '../../models/anime';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
cartItems:Anime[]=[];

  constructor() {
  }

  addToCart(anime:Anime){
    this.cartItems.push(anime);
    
  }
}
