import { Component, OnInit } from '@angular/core';
import {NewsInterface} from "../../../_interface/news.interface";
import {NewsService} from "../../../services/news/news.service";

@Component({
  selector: 'app-public-news',
  templateUrl: './public-news.component.html',
  styleUrls: ['./public-news.component.scss']
})
export class PublicNewsComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  newsArticles: NewsInterface[]

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe({
      next: articles => this.newsArticles = articles,
    })
  }

}
