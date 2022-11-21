import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { newsModel } from './models/newsModel';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private baseUrl: string = '';
  newsData: newsModel | any


  constructor(private http: HttpClient) { 
    this.baseUrl = environment.newsApi;
  }

  getData(): Observable<newsModel | any>{
    this.newsData = this
                    .http
                    .get<newsModel | any>(this.baseUrl);
    
    return this.newsData;
  }
}
