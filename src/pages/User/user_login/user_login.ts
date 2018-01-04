import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {homePage} from '../user_home/user_home';
@Component({
  selector: '',
  templateUrl: 'user_login.html'
})
export class UserloginPage {

  tabBarElement: any;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  openHomePage(){
    this.navCtrl.push(homePage);
  }
}
