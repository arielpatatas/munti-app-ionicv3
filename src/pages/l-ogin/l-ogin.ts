import { Component, ViewChild  } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { REGISTERPage } from '../r-egister/r-egister';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-l-ogin',
  templateUrl: 'l-ogin.html'
})
export class LOGINPage {

  @ViewChild("username") username;
  @ViewChild("password") password;

  data:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    private http: Http, public loading: LoadingController) {
    }
      signUp(){

        this.navCtrl.push(REGISTERPage);
    
      }
    
      signIn(){
    
      //// check to confirm the username and password fields are filled
    
      if(this.username.value=="" ){
    
        let alert = this.alertCtrl.create({
    
        title:"ATTENTION",
    
        subTitle:"Username field is empty",
    
        buttons: ['OK']
    
        });
    
        alert.present();
    
      } else if(this.password.value==""){
    
        let alert = this.alertCtrl.create({
    
        title:"ATTENTION",
    
        subTitle:"Password field is empty",
    
        buttons: ['OK']
    
        });
    
        alert.present();
    
      } else {
    
        var headers = new Headers();
    
        headers.append("Accept", 'application/json');
    
        headers.append('Content-Type', 'application/json' );
    
        let options = new RequestOptions({ headers: headers });
    
        let data = {
    
        username: this.username.value,
    
        password: this.password.value
    
        };
    
        let loader = this.loading.create({
    
        content: 'Processing please wait…',
    
        });
    
        loader.present().then(() => {
    
        this.http.post('http://localhost/munti/api/login.php',data,options)
    
        .map(res => res.json())
    
        .subscribe(res => {
    
        console.log(res)
    
        loader.dismiss()
    
        if(res=="Login Success!"){
    
          let alert = this.alertCtrl.create({
    
            title:"CONGRATS",
    
            subTitle:(res),
    
            buttons: ['OK']
    
          });
    
          alert.present();
    
        }else {
    
          let alert = this.alertCtrl.create({
    
          title:"ERROR",
    
          subTitle:("Username or Password is Invalid"),
    
          buttons: ['OK']
    
          });
    
          alert.present();
    
        }
    
      });
    
      });
    
      
      this.navCtrl.push(TabsControllerPage);
      }
    }
    }
  


