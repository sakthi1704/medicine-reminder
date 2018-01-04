import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {loginPage} from '../login/login'
import {UserloginPage} from '../../user/user_login/user_login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewWillEnter() {
    console.log(this.tabBarElement);
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  openAddPage() {
    this.navCtrl.push(loginPage);
  }
  openUserLoginPage() {
    this.navCtrl.push(UserloginPage);
  }
  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

}
