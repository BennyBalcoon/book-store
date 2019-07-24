import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

comments = null;
loading = true;
error = null;

constructor(private http: HttpClient) { 
    http.get('/assets/comments.json')
    .pipe(
      // delay(3000),
      finalize(() => { // callback appelé à la fin dans tous les cas
        this.loading = false;
      })
    )
    .subscribe((data) => {
      // console.log(data);
      this.comments = data;
    }, (error) => {
      this.error = error.statusText;
      this.loading = false;
    });
  }
}
