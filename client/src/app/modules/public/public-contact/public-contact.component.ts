import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ContactFormService } from 'src/app/services/contact-form/contact-form.service';

@Component({
  selector: 'app-public-contact',
  templateUrl: './public-contact.component.html',
  styleUrls: ['./public-contact.component.scss']
})
export class PublicContactComponent implements OnInit {

  constructor(private contactService: ContactFormService, private recaptchaV3Service: ReCaptchaV3Service) {

  }
  error: string = ""
  success: boolean = false;
  ngOnInit(): void {

  }





  contactForm = new UntypedFormGroup({
    email: new UntypedFormControl(''),
    name: new UntypedFormControl(''),
    text: new UntypedFormControl(''),
    hp: new UntypedFormControl('application-hp-verify')
  })

  submitForm() {


    if (this.contactForm.valid) {
      this.recaptchaV3Service.execute("submitContactForm").subscribe((token) => {
        this.contactService.submitContact({
          email: this.contactForm.value["email"],
          name: this.contactForm.value["name"],
          text: this.contactForm.value["text"],
          hp: this.contactForm.value["hp"],
          captchaToken: token
        }).subscribe(data => {
          console.log(data)
          this.success = true;
          this.contactForm.reset()
        }, err => {
          this.error = "Ein Fehler ist aufgetreten."
        })
      })
    } else {
      this.error = "Bitte füllen Sie alle Felder aus!"
    }


  }

}
