import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Http, Headers, RequestOptions}  from "@angular/http";

import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';

/**

 * Generated class for the ProfilePage page.

 *

 * See https://ionicframework.com/docs/components/#navigation for more info on

 * Ionic pages and navigation.

 */

@IonicPage()

@Component({

  selector: 'page-profile',

  templateUrl: 'profile.html',

})

export class ProfilePage {

data:any;

username:any;

fullname:any;

email:any;

contactnumber:any;

gender:any;

age:any;

items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: Http,  public loading: LoadingController) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ProfilePage');

  }

  ngOnInit(){

    this.username = this.navParams.get('username');
    this.fullname = this.navParams.get('fullname');
    this.email = this.navParams.get('email');
    this.contactnumber = this.navParams.get('contactnumber');
    this.gender = this.navParams.get('gender');
    this.age = this.navParams.get('age');

   

var headers = new Headers();

headers.append("Accept", 'application/json');

headers.append('Content-Type', 'application/json' );

let options = new RequestOptions({ headers: headers });

let data = {

    username: this.username,
    fullname: this.fullname,
    email: this.email,
    contactnumber: this.contactnumber,
    gender: this.gender,
    age: this.age,


     };

let loader = this.loading.create({

content: 'Processing please wait...',

});

loader.present().then(() => {

this.http.post('http://localhost/munti/api/retrieve_data.php',data, options)

.map(res => res.json())

    .subscribe(res => {

     loader.dismiss()

    this.items=res.server_response;

    console.log(this.items);

    });

    });

     }

    }