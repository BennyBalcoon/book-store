import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private api : string = 'https://www.googleapis.com/books/v1/';

  public result: any;

  constructor(private http : HttpClient) { }

  search(search : string, startIndex : number = 0) : Observable<any> {
    return (this.http.get<any>(this.api + 'volumes?q=' + search + '&maxResults=40&startIndex=' + startIndex));
  }

  select(id : string) : Observable<any> {
    return (this.http.get<any>(this.api + 'volumes/' + id));
  }
}
