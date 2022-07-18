import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {NewsService} from "../../../services/news/news.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-admin-news-create',
  templateUrl: './admin-news-create.component.html',
  styleUrls: ['./admin-news-create.component.scss']
})
export class AdminNewsCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private newsService: NewsService, private router: Router) { }

  form = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  })


  ngOnInit(): void {

  }

  submit() {
    if(this.form.valid) {
      this.newsService.createNewsArticle(this.form.value.title, this.form.value.content).subscribe({
        next: () => {
          this.router.navigate(['/admin/news'])
        }
      });

    }
  }

}
