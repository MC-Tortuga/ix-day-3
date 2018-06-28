import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { CartProvider } from '../providers/cart/cart.service';
import { CartPage } from '../pages/cart/cart';
import { PaymentPage } from '../pages/payment/payment';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    CartPage,
    PaymentPage
  ],
  imports: [
    BrowserModule,
    IonicPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    CartPage,
    PaymentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartProvider,
    
  ]
})
export class AppModule {}
