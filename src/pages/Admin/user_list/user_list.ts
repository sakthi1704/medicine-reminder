
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {updateUsersPage} from '../update_users/update_users';
import {updateMedicinesPage} from '../update_medicines/update_medicines';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'user_list.html'
})
export class displayUsersPage {
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
  openEditUserPage() {
    this.navCtrl.push(updateUsersPage);
  }
  openAddMedicinePage() {
    this.navCtrl.push(updateMedicinesPage);
  }
  logForm(){
    console.log(this.login.value);
  }
}
