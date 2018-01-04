
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {editProfilePage} from '../edit_profile/edit_profile';

@Component({
  selector: 'page-home',
  templateUrl: 'settings.html'
})
export class settingsPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
   Frequency: string = "1";
   userNameList: string = "1";
  public event = {
   month: '2017-12-23',
   timeStarts: '07:43',
   timeEnds: '1990-02-20'
 }
  openNavDetailsPage() {
    this.navCtrl.push(editProfilePage);
  }

  doAlert() {
    let prompt = this.alertCtrl.create({
          title: 'Feedback!',
          message: "Enter Your Feedback here",
          inputs: [
            {
              name: 'title',
              placeholder: ''
            },
          ],
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Save',
              handler: data => {
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
}
  logout() {
    let prompt = this.alertCtrl.create({
          title: 'Log out of App?',
          // message: "Are You",
          buttons: [
            {
              text: 'Cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'LOG OUT',
              handler: data => {
                console.log('Saved clicked');
              }
            }
          ]
        });
        prompt.present();
}
}
