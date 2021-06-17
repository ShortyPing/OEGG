import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicActivitiesComponent } from './public-activities/public-activities.component';
import { PublicContactComponent } from './public-contact/public-contact.component';
import { PublicDirectorsComponent } from './public-directors/public-directors.component';
import { PublicGalleryComponent } from './public-gallery/public-gallery.component';
import { PublicGoalsComponent } from './public-goals/public-goals.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicImprintComponent } from './public-imprint/public-imprint.component';
import { PublicInitComponent } from './public-init/public-init.component';
import { PublicLinksComponent } from './public-links/public-links.component';
import { PublicMembershipComponent } from './public-membership/public-membership.component';
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
        path: "privacy",
        component: PublicPrivacyComponent
      },
      {
        path: "directors",
        component: PublicDirectorsComponent
      },
      {
        path: "membership",
        component: PublicMembershipComponent
      },
      {
        path: "links",
        component: PublicLinksComponent
      },
      {
        path: "gallery",
        component: PublicGalleryComponent
      },
      {
        path: "contact",
        component: PublicContactComponent
      },
      {
        path: "goals",
        component: PublicGoalsComponent
      },
      {
        path: "activities",
        component: PublicActivitiesComponent
      },
      {
        path: "imprint",
        component: PublicImprintComponent
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
