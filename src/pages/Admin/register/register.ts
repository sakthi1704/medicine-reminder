
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {loginPage} from '../login/login';
import { PasswordValidation } from './pwd_validation';

@Component({
  selector: 'page-home',
  templateUrl: 'register.html'
})
export class registerPage {
  tabBarElement: any;
    private login : FormGroup;
  constructor( private formBuilder: FormBuilder, public navCtrl: NavController  ) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.login = this.formBuilder.group({
      'name'      : new FormControl('',[Validators.required,Validators.minLength(6), Validators.pattern('[a-zA-Z]{5,}')]),
      'email'      : new FormControl('',[Validators.required,Validators.minLength(6), Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')]),
      'password'      : new FormControl('',[Validators.required,Validators.minLength(6)]),
      'ConfirmPassword'      : new FormControl('',[Validators.required,Validators.minLength(6)])
    }, {
      Validators: PasswordValidation.MatchPassword // your validation method
    });
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  openUserPage() {
    this.navCtrl.push(loginPage)
  }
}
