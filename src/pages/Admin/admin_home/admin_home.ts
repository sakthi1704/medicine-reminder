
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {addUsersPage} from '../add_users/add_users';
import {addMedicinesPage} from '../add_medicines/add_medicines';

@Component({
  selector: 'page-home',
  templateUrl: 'admin_home.html'
})
export class adminHomePage {
  tabBarElement: any;
  constructor(public navCtrl: NavController) {
  }
  openAddUserPage() {
    this.navCtrl.push(addUsersPage);
  }
  openAddMedicinePage() {
    this.navCtrl.push(addMedicinesPage);
  }
}
