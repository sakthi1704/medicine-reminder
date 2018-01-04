
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {settingsPage} from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'edit_profile.html'
})
export class editProfilePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController) {
  }
   Frequency: string = "1";
   userNameList: string = "1";
  public event = {
   month: '2017-12-23',
   timeStarts: '07:43',
   timeEnds: '1990-02-20'
 }
  navSettings() {
    this.navCtrl.push(settingsPage);
  }
}
