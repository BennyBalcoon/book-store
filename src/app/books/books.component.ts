import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  searchQuery : string = '';
  searchResults = null;

  constructor(private booksService : BooksService) {
   }

  ngOnInit() {
  }

  search() {
    this.booksService.search(this.searchQuery).subscribe((data) => {
      console.log(data);
      this.searchResults = data;
    }, (error) => {
      console.log(error);
    });
  }

  showMore() {
    this.booksService.search(this.searchQuery, this.searchResults.items.length).subscribe((data) => {
      console.log(data);
      this.searchResults.items.push(...data.items);
    }, (error) => {
      console.log(error);
    });  
  }

}
