import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import  { LogPage } from '../pages/login/login';
import{ RegisterPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
// Initialize Firebase
import * as firebase from 'firebase'
 
 var config = {
  apiKey: "AIzaSyCqrVDzXxxeslQYhFtL1IJ9j_7GSyiK0pM",
  authDomain: "sidemenu-f3023.firebaseapp.com",
  databaseURL: "https://sidemenu-f3023.firebaseio.com",
  projectId: "sidemenu-f3023",
  storageBucket: "sidemenu-f3023.appspot.com",
  messagingSenderId: "370442120524"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LogPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Facebook,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
