import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from "@angular/forms";
import {BackendService} from "../../../../services/backend/backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private backendService: BackendService, private router: Router) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  error: string

  login() {
    if(this.loginForm.valid) {
      this.backendService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: (res) => {
          localStorage.setItem("token", res["token"]);
          this.backendService.requestUser().subscribe({
            next: user => {
              this.backendService.user.next(user);
              this.router.navigate(['/admin']);
            }
          })
        },
        error: (err) => {
          if(err.error.statusCode == 401) {
            this.error = "Benutzername oder Passwort ist falsch!"
            return;
          }
          this.error = `Ein unbekannter Fehler ist aufgetreten. Bitte wenden Sie sich mit dem Code ${err.error.statusCode || 900} an den Entwickler!`
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
