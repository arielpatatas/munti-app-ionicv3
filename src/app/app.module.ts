import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LOGINPage } from '../pages/l-ogin/l-ogin';
import { REGISTERPage } from '../pages/r-egister/r-egister';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { PostPage } from '../pages/post/post';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    SettingsPage,
    TabsControllerPage,
    LOGINPage,
    REGISTERPage,
    ProfilePage,
    SearchPage,
    PostPage,
    NewsfeedPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    SettingsPage,
    TabsControllerPage,
    LOGINPage,
    REGISTERPage,
    ProfilePage,
    SearchPage,
    PostPage,
    NewsfeedPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}