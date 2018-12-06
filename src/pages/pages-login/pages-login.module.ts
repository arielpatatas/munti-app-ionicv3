import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesLoginPage } from './pages-login';

@NgModule({
  declarations: [
    PagesLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(PagesLoginPage),
  ],
})
export class PagesLoginPageModule {}
