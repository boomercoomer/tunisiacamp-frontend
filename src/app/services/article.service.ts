import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = "http://localhost:8080/api/article/";

  constructor(private http: HttpClient) { }
  public getAll(): Article[] {
    const url = this.url + "findAll";
    let articleList: Article[] = [];

    this.http.get<Article[]>(url)
      .pipe(map((res) => {

        for (let key in res) {

          if (res.hasOwnProperty(key)) {
            articleList.push({ ...res[key] })
          }
        }
      }))
      .subscribe((res) => { }
      )
    return articleList;

  }

  getArticleById(articleId: number): Observable<Article> {
    const url = this.url + articleId.toString();
    let a!: Article;
    return this.http.get<Article>(url)

  }
  public getByCategoryAll(category: string): Article[] {
    const url = this.url + "category/" + category;
    let articleList: Article[] = [];

    this.http.get<Article[]>(url)
      .pipe(map((res) => {

        for (let key in res) {

          if (res.hasOwnProperty(key)) {
            articleList.push({ ...res[key] })
          }
        }
      }))
      .subscribe((res) => { }
      )
    return articleList;

  }
  public deleteArticleById(articleId: number): void {
    const url = this.url + "/delete/" + articleId.toString();
    this.http.delete<void>(url)
      .subscribe();
  }
  public getArticleByName(term: string): Article[] {
    const url = this.url + "search/" + term;

    let articleList: Article[] = [];

    this.http.get<Article[]>(url)
      .pipe(map((res) => {

        for (let key in res) {

          if (res.hasOwnProperty(key)) {
            articleList.push({ ...res[key] })
          }
        }
      }))
      .subscribe((res) => { }
      )
    return articleList;
  }
}
