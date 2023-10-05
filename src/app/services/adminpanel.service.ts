import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class AdminpanelService {
  url = "http://localhost:8080/api/article/";

  constructor(
    private http: HttpClient
  ) { }
  public async addArticle(article: Article): Promise<void> {
    const url = this.url + "add";
    this.http.post(url, article).subscribe();
  }
  public async deleteArticle(id: number): Promise<void> {
    const url = this.url + "delete/" + id.toString();
    this.http.delete(url).subscribe();
  }
}
