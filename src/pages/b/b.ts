import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModalController} from 'ionic-angular';
import { AddPage } from '../add/add';
/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public modalCtrl: ModalController) {
    // for (let i = 0; i < 30; i++) {
    //   this.items.push( this.items.length );
    // }
  }
  ionViewDidLoad(){
    let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
  }
  // presentProfileModal() {
  //   let profileModal = this.modalCtrl.create(AddPage);
  //   profileModal.present();
  // }

  // ionViewDidLoad() {
  //   console.log(this.navParams.get('id'));
  //   // console.log(this.navParams.data.id);
  //   //data把对象完全打出来，再.xx,具体到拿谁
  //   // console.log(this.navParams.get('id'));
  //   //get是要写明拿谁，直接拿到id的值
  // }

  // doInfinite(infiniteScroll) {
  //   this.http.get('/api/courses').subscribe(data=>{
  //     console.log(data);
  //     infiniteScroll.complete();
  //   });
  //   console.log('Begin async operation');

  //   // setTimeout(() => {
  //   //   for (let i = 0; i < 30; i++) {
  //   //     this.items.push( this.items.length );
  //   //   }

  //   //   console.log('Async operation has ended');
  //   //   infiniteScroll.complete();
  //   //   if(this.items.length>60){
  //   //     infiniteScroll.enable();
  //   //   }
  //   // }, 500);


  // }
}
