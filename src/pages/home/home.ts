import { Component } from '@angular/core';
import { NavController,AlertController  } from 'ionic-angular';
import { LogPage } from '../login/login';
import * as firebase from 'firebase'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 email:any;
 username:any;
 
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,) {
    
    /*let curuseruid = firebase.auth().currentUser.uid;
    console.log(curuseruid);*/
   
    let selfRef = firebase.database().ref('userProfile/' + firebase.auth().currentUser.uid)

    selfRef.on('value',(snapuser:any)=>{
      if(snapuser.val()){
        console.log(snapuser.val());
        this.email = snapuser.val().email;
        this.username = snapuser.val().username;
      }

  })
  }
  
 /* logout(){
    console.log("logout");
    localStorage.removeItem('login');
    //this.menu.close();
    this.navCtrl.setRoot(LogPage);
  }*/
  logout(){
    this.navCtrl.setRoot(LogPage);
   
    return firebase.auth().signOut();
     //console.log("hello");
    
     
   }

}
