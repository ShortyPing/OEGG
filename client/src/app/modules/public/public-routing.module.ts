import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicInitComponent } from './public-init/public-init.component';

const routes: Routes = [
  {
    path: "",
    component: PublicInitComponent,
    children: [
      {
        path: "",
        component: PublicHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
