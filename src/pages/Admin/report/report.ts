
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {loginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'report.html'
})
export class reportPage {

  constructor(public navCtrl: NavController) {

  }
   Member: string = "f";
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
