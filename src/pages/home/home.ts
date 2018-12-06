import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ProfilePage } from '../profile/profile'
import { PostPage } from '../post/post';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
//   goToProfile(): void {
//     this.navCtrl.push(ProfilePage);
//  }
post(){

  this.navCtrl.push(PostPage);

  }
  
}
