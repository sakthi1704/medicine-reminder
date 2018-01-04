
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {loginPage} from '../login/login';
import {displayUsersPage} from '../user_list/user_list';

@Component({
  selector: 'page-home',
  templateUrl: 'update_users.html'
})
export class updateUsersPage {
  tabBarElement: any;
  private login : FormGroup;

  constructor( private formBuilder: FormBuilder, public navCtrl: NavController  ) {
    this.login = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      BloodGroup: ['', Validators.required],
      Relation: ['', Validators.required]
    });
  }
   gender: string = "f";
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
  openDisplayUser() {
    this.navCtrl.push(displayUsersPage);
  }
}
