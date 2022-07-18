import {Component, Input, OnInit} from '@angular/core';
import {NewsInterface} from "../../../_interface/news.interface";
import {NewsService} from "../../../services/news/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-public-news-read',
  templateUrl: './public-news-read.component.html',
  styleUrls: ['./public-news-read.component.scss']
})
export class PublicNewsReadComponent implements OnInit {

  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  article?: NewsInterface

  id?: string

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {
        this.id = params["id"]
      }
    })

    this.newsService.searchNewsArticle(this.id).subscribe({
      next: article => {
        this.article = article
      },
      error: (err) => {
        if(err.error.statusCode == "404") {
          this.article = {
            title: "Nicht gefunden",
            createdBy: "n/a",
            createdAt: "0",
            content: "<strong>Der angefragte Artikel kann nicht gefunden werden!</strong>",
            _id: "0"
          }
        }
      }
    })
  }

}
