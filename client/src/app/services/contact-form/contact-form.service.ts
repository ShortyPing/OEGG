import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private client: HttpClient) { }

  backendUrl: string = "https://api.oe-gg.org"

  submitContact(values): Observable<Object> {
    return this.client.post(`${this.backendUrl}/contact`, {
      values
    }, {
      headers: new HttpHeaders().set("content-type", "application/json")
    })
  }
}
