import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicInitComponent } from './public-init/public-init.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { PublicPrivacyComponent } from './public-privacy/public-privacy.component';
import { PublicDirectorsComponent } from './public-directors/public-directors.component';
import { PublicMembershipComponent } from './public-membership/public-membership.component';
import { PublicLinksComponent } from './public-links/public-links.component';
import { PublicGalleryComponent } from './public-gallery/public-gallery.component';
import { PublicContactComponent } from './public-contact/public-contact.component';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { PrivacyModalComponent } from './public-init/modals/privacy-modal/privacy-modal.component';
import { PublicGoalsComponent } from './public-goals/public-goals.component';
import { PublicActivitiesComponent } from './public-activities/public-activities.component';
import { PublicImprintComponent } from './public-imprint/public-imprint.component';


@NgModule({
  declarations: [

    PublicInitComponent,
    PublicHomeComponent,
    PublicPrivacyComponent,
    PublicDirectorsComponent,
    PublicMembershipComponent,
    PublicLinksComponent,
    PublicGalleryComponent,
    PublicContactComponent,
    PrivacyModalComponent,
    PublicGoalsComponent,
    PublicActivitiesComponent,
    PublicImprintComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RecaptchaV3Module,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LchI9YaAAAAAPtzJGtFkvb5w-A6X2cNeeGXR9dU"
    },
    CookieService
  ]
})
export class PublicModule { }
