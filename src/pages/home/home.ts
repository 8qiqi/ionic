import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { SousuoPage } from '../sousuo/sousuo';
// import { JiajvPage } from '../jiajv/jiajv';

// import { BPage } from '../b/b';
// import { ZhucePage } from '../zhuce/zhuce';
// import { NavParams } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;//拿到b组件下面的方法
  // constructor(public navCtrl: NavController,public navParams: NavParams) {
  //   console.log('Passed params', navParams.data);
  // }
 
  // ionViewDidLoad(){
  //   this.ac.get();
  // }
 isActive=0;
 isClick(i){
   this.isActive=i;
 }
 arr=["推荐","家居","餐厨","床上用品"];
  constructor(public modalCtrl: ModalController) {
    
  }
  ionViewDidLoad(){
    document.querySelector('.bar-button').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(SousuoPage);
      profileModal.present();
    },false)
  }
  // goSub(){
  //   this.navCtrl.push(BPage,{id:1});//出栈入栈的,形式
  // }
  // goSubZhuce(){
  //   this.navCtrl.push(ZhucePage,{id:1});
  // }
  // goTuijian(){
  //   this.navCtrl.push(JiajvPage,{id:1});
  // }
}
