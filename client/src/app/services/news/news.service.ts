import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NewsInterface} from "../../_interface/news.interface";
import {environment} from "../../../environments/environment";
import {BackendService} from "../backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private client: HttpClient, private backendService: BackendService) { }

  getAllNews(){
    return this.client.get<NewsInterface[]>(environment.backendUrl + "/news")
  }

  searchNewsArticle(id: string) {
    return this.client.get<NewsInterface>(environment.backendUrl + "/news/search?id=" + id);
  }

  createNewsArticle(title: string, content: string) {
    return this.client.post(environment.backendUrl + "/news", {
      title,
      content
    }, {
      headers: new HttpHeaders()
        .set("Authorization", `Bearer ${this.backendService.getToken()}`)
        .set("Content-Type", "application/json")
    })
  }
}
