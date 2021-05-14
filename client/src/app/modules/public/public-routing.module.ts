import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicAboutComponent } from './public-about/public-about.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicInitComponent } from './public-init/public-init.component';
import { PublicPrivacyComponent } from './public-privacy/public-privacy.component';

const routes: Routes = [
  {
    path: "",
    component: PublicInitComponent,
    children: [
      {
        path: "",
        component: PublicHomeComponent
      },
      {
        path: "about",
        component: PublicAboutComponent
      },
      {
        path: "privacy",
        component: PublicPrivacyComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
