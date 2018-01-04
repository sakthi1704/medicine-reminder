import { Component } from '@angular/core';

import { addUsersPage } from '../admin/add_users/add_users';
import { settingsPage } from '../admin/settings/settings';
import { reportPage } from '../admin/report/report';
import { HomePage } from '../admin/home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = addUsersPage;
  tab3Root = settingsPage;
  tab4Root = reportPage;

  constructor() {

  }
}
// var tabs = {
// 	tabsList: ['tab1', 'tab2'],
//     admin: {
//         tab1: 'HomePage',
//         tab2: 'addUsersPage',
//         tab3: 'ContactPage',
//         tab4: 'settingsPage',
//         tab5: 'reportPage'
//     },
//     user: {
//         tab1: 'HomePage',
//         tab2: 'MedicineList',
//         tab3: 'Profile'
//     }
// }
