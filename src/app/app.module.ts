import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { JiajvPage } from '../pages/jiajv/jiajv';
import { ComponentsModule } from '../components/components.module';

import { HttpClientModule } from '@angular/common/http';
//HttpClientModule是引入的请求的模块,在下面的imports中也要引入
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    JiajvPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      tabsHideOnSubPages: false
      //是否隐藏子页面上的选项卡
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    JiajvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
