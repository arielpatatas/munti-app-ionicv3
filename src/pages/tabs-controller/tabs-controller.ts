import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';
@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = MapPage;
  tab3Root: any = ProfilePage;
  tab4Root: any = SearchPage;
  tab5Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
