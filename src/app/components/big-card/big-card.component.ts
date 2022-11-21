import { Component, Input, OnInit } from '@angular/core';
import { newsModel } from 'src/app/models/newsModel';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  

  @Input()
  photoCover:string ='';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDescription: string = '';
  
  constructor(private service:NewsService){ 
    }

  obj: any = {}
  ngOnInit(): void {

    this.service.getData().subscribe(
      {
        next: (res) => {
            this.obj = {
              author: res.articles[0].author,
              photo: res.articles[0].urlToImage,
              title: res.articles[0].title,
              description: res.articles[0].description
            }

            return this.obj;
          }
        ,
        error: err => console.log(err),
      }
    )
  }


}
