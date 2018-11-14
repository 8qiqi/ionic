import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ShezhiyePage } from '../shezhiye/shezhiye';
import { DingdanPage } from '../dingdan/dingdan';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }
  goShezhiye(){
     this.navCtrl.push(ShezhiyePage);//出栈入栈的,形式
  }
  goDingdan(){
    this.navCtrl.push(DingdanPage);
  }
  // ionViewDidLoad(){
  //   document.querySelector('.abc').addEventListener('click',()=>{
  //     let profileModal = this.modalCtrl.create(ShezhiyePage);
  //     profileModal.present();
  //   },false)
  //   // document.querySelector('page-a .dingdan .chakan').addEventListener('click',()=>{
  //   //   let profileModal = this.modalCtrl.create(DingdanPage);
  //   //   profileModal.present();
  //   // },false)
  // }

}
