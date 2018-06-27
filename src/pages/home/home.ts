import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMES } from '../../mock-data/anime-list-mock';
import { Anime } from '../../models/anime';
import { DetailPage } from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  animes: Anime[] = ANIMES
  constructor(public navCtrl: NavController) {

  }

  toDisplayPage(item: Anime) {
  this.navCtrl.push(DetailPage,item)
  }

}
