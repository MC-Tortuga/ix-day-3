import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Anime } from '../../models/anime';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedAnime = navParams.data;
    console.log(this.selectedAnime);
  }


  toggle() {
    this.flag = !this.flag
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
