import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    MenuComponent,
     MenuBarComponent

  ],
  imports: [
    CommonModule,
    PrimengModule

  ],
  exports:[
     MenuComponent,
     MenuBarComponent,
     BrowserAnimationsModule
  ]
})
export class SharedModule { }
