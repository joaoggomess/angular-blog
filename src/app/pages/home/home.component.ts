import { Component, OnInit } from '@angular/core';
import { newsModel } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:NewsService) { }
  
  
  newsQuery: any = [];

  ngOnInit(): void {
    this.service.getData().subscribe(
      {
        next: res =>{
          for(let i = 1; i < 4; i++) {
            let obj: newsModel = {
              author: res.articles[i].author,
              photo: res.articles[i].urlToImage,
              title: res.articles[i].title,
              description: res.articles[i].description
            }
            this.newsQuery.push(
              obj
            )
          }
        },
        error: err => console.log(err),
      }
    )
  }

}
