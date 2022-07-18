import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublicRoutingModule} from './public-routing.module';
import {PublicInitComponent} from './public-init/public-init.component';
import {PublicHomeComponent} from './public-home/public-home.component';
import {PublicPrivacyComponent} from './public-privacy/public-privacy.component';
import {PublicDirectorsComponent} from './public-directors/public-directors.component';
import {PublicMembershipComponent} from './public-membership/public-membership.component';
import {PublicLinksComponent} from './public-links/public-links.component';
import {PublicGalleryComponent} from './public-gallery/public-gallery.component';
import {PublicContactComponent} from './public-contact/public-contact.component';
import {RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY} from 'ng-recaptcha';
import {ReactiveFormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {PrivacyModalComponent} from './public-init/modals/privacy-modal/privacy-modal.component';
import {PublicGoalsComponent} from './public-goals/public-goals.component';
import {PublicActivitiesComponent} from './public-activities/public-activities.component';
import {PublicImprintComponent} from './public-imprint/public-imprint.component';
import {PublicNewsComponent} from './public-news/public-news.component';
import {PublicNewsReadComponent} from './public-news-read/public-news-read.component';
import {AppModule} from "../../app.module";
import {UsernamePipe} from "../../pipes/username.pipe";
import {SharedModule} from "../shared/shared.module";


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
    PublicImprintComponent,
    PublicNewsComponent,
    PublicNewsReadComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RecaptchaV3Module,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LchI9YaAAAAAPtzJGtFkvb5w-A6X2cNeeGXR9dU"
    },
    CookieService
  ]
})
export class PublicModule {
}
