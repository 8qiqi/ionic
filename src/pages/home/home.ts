import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JiajvPage } from '../jiajv/jiajv';
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
 
  constructor(public navCtrl: NavController) {
    
  }
  // goSub(){
  //   this.navCtrl.push(BPage,{id:1});//出栈入栈的,形式
  // }
  // goSubZhuce(){
  //   this.navCtrl.push(ZhucePage,{id:1});
  // }
  goTuijian(){
    this.navCtrl.push(JiajvPage,{id:1});
  }
}
