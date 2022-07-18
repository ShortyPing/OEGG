import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {User} from "../../_interface/user.interface";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private client: HttpClient, private router: Router) {
    console.log("Backend-Service initialized")
    this.requestUser().subscribe({
      next: user => {
        this.user.next(user);
      }
    })

    setInterval(() => {
      this.requestUser().subscribe({
        next: (user) => {
          this.user.next(user)
        },
        error: () => {
          this.logout();
        }
      })
    }, 1000 * 60 * 30) // update user object every 30 seconds, mainly to check if logged in and user is not deleted
  }

  public user: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);


  public getToken() {
    return localStorage.getItem("token");
  }

  public requestUser() {
    return this.client.get<User>(environment.backendUrl + "/user/self", {
      headers: new HttpHeaders()
        .set("Authorization", `Bearer ${this.getToken()}`)
    })
  }

  public login(username: string, password: string) {
    return this.client.post(environment.backendUrl + "/user/auth", {
      username,
      password
    })
  }

  public logout(redirect?: boolean) {
    localStorage.removeItem("token")
    if (redirect)
      this.router.navigate(['/admin/auth/login'])
  }

  public getUsername(id: string) {
    return this.client.get(environment.backendUrl + "/user/username?id=" + id)
  }
}
