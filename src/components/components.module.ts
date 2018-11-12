import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule} from 'ionic-angular';
//现在组件是单独的，不能引用ionic的标签，所以必须引入需要的模块
@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
