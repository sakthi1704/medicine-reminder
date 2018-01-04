
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {loginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'update_medicines.html'
})
export class updateMedicinesPage {
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
  openAddUserPage() {
    this.navCtrl.push(loginPage);
  }
  openAddMedicinePage() {
    this.navCtrl.push(loginPage);
  }
}
