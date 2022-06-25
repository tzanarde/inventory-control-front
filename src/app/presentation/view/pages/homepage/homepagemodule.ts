import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppMaterialModule } from 'src/app/app-material.module';
//import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    AppMaterialModule,
   // HomeRoutingModule
  ]
})
export class HomePageModule { }
