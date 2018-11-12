import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { JiajvPage } from '../jiajv/jiajv';
/**
 * Generated class for the BComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'b',
  templateUrl: 'b.html'
})
export class BComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello BComponent Component');
    this.text = 'Hello World';
  }
  get(){
    console.log('b组件');
  }
  // goTuijian(){
  //   this.navCtrl.push(JiajvPage,{id:1});
  // }
}
