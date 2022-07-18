import { Component, OnInit } from '@angular/core';
import {NewsService} from "../../../services/news/news.service";
import {NewsInterface} from "../../../_interface/news.interface";

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.scss']
})
export class AdminNewsComponent implements OnInit {

  constructor(public newsService: NewsService) { }

  news: NewsInterface[] = []


  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: value => this.news = value
    })
  }

  deleteArticle(id: string) {
    this.newsService.deleteNewsArticle(id).subscribe({
      next: () => this.ngOnInit()
    })
  }

}
