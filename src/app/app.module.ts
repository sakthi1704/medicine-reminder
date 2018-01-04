import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { MyApp } from './app.component';

import { loginPage } from '../pages/admin/login/login';
import { forgetPaswdPage } from '../pages/admin/forget_paswd/forget_paswd';
import { adminHomePage } from '../pages/admin/admin_home/admin_home';
import { addUsersPage } from '../pages/admin/add_users/add_users';
import { displayUsersPage } from '../pages/admin/user_list/user_list';
import { HomePage } from '../pages/admin/home/home';
import { updateUsersPage } from '../pages/admin/update_users/update_users';
import { addMedicinesPage } from '../pages/admin/add_medicines/add_medicines';
import { updateMedicinesPage } from '../pages/admin/update_medicines/update_medicines';
import { registerPage } from '../pages/admin/register/register';
import { settingsPage } from '../pages/admin/settings/settings';
import { editProfilePage } from '../pages/admin/edit_profile/edit_profile';
import { reportPage } from '../pages/admin/report/report';
import { UserloginPage } from '../pages/user/user_login/user_login';
import { notificationsPage } from '../pages/user/notifications/notifications';
import { medicineListPage } from '../pages/user/medicine_list/medicine_list';
import { profilePage } from '../pages/user/profile/profile';
import { homePage } from '../pages/user/user_home/user_home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AnimatesDirective,
    MyApp,
    loginPage,
    UserloginPage,
    forgetPaswdPage,
    adminHomePage,
    addUsersPage,
    HomePage,
    displayUsersPage,
    updateUsersPage,
    addMedicinesPage,
    updateMedicinesPage,
    registerPage,
    settingsPage,
    editProfilePage,
    reportPage,
    notificationsPage,
    medicineListPage,
    profilePage,
    homePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    loginPage,
    UserloginPage,
    forgetPaswdPage,
    adminHomePage,
    HomePage,
    addUsersPage,
    displayUsersPage,
    updateUsersPage,
    addMedicinesPage,
    updateMedicinesPage,
    registerPage,
    settingsPage,
    editProfilePage,
    reportPage,
    notificationsPage,
    medicineListPage,
    profilePage,
    homePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     AnimationService
  ]
})
export class AppModule {}
