import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsernamePipe} from "../../pipes/username.pipe";



@NgModule({
  declarations: [UsernamePipe],
  imports: [
    CommonModule
  ],
  exports: [UsernamePipe]
})
export class SharedModule { }
