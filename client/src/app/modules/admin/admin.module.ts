import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminInitComponent } from './admin-init/admin-init.component';
import { AdminLoginComponent } from './auth/admin-login/admin-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';
import { AdminNewsCreateComponent } from './admin-news-create/admin-news-create.component';
import {QuillModule} from "ngx-quill";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AdminInitComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNewsComponent,
    AdminNewsCreateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      placeholder: "Text",


    }),
    SharedModule

  ]
})
export class AdminModule { }
