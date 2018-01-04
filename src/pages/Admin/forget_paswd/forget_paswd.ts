import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'forget_paswd.html'
})
export class forgetPaswdPage {

  private login : FormGroup;

  constructor( private formBuilder: FormBuilder, public navCtrl: NavController  ) {
    this.login = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
}
