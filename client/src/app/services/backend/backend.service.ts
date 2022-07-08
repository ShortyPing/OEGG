import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {User} from "../../_interface/user.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private client: HttpClient) {
  }

  private user: BehaviorSubject<User> = new BehaviorSubject<User>(undefined);


  public getToken() {
    return localStorage.getItem("token");
  }

  public requestUser() {
    return this.client.get(environment.backendUrl + "/user/self", {
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





}
