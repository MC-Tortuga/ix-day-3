import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  price: number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.price = navParams.get("price");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  pay() {
    let toast = this.toastCtrl.create({
      message: 'Payment Succeeded \n Total:' + this.price,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();

    this.navCtrl.push(HomePage);
  }


}
