import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicInitComponent } from './public-init/public-init.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicAboutComponent } from './public-about/public-about.component';


@NgModule({
  declarations: [
  
    PublicInitComponent,
       PublicHomeComponent,
       PublicAboutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
