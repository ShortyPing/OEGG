import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsInterface} from "../../../_interface/news.interface";
import {NewsService} from "../../../services/news/news.service";

@Component({
  selector: 'app-admin-news-edit',
  templateUrl: './admin-news-edit.component.html',
  styleUrls: ['./admin-news-edit.component.scss']
})
export class AdminNewsEditComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private newsService: NewsService, private router: Router) { }

  form = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  })

  id: string
  article?: NewsInterface

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => this.id = params["id"]
    })
    this.newsService.searchNewsArticle(this.id).subscribe({
      next: value => {
        this.article = value
        this.form.controls['title'].setValue(this.article.title)
        this.form.controls['content'].setValue(this.article.content)
      }
    })
  }

  submit() {
    if(this.form.valid) {
      this.newsService.updateNewsArticle(this.id, this.form.value.title, this.form.value.content).subscribe({
        next: () => this.router.navigate(['/admin/news'])
      })
    }
  }

}
