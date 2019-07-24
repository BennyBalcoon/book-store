import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  searchQuery : string = '';
  searchResults = null;

  constructor(private booksService : BooksService) {this.searchResults=this.booksService.result
   }

  ngOnInit() {
  }

  search() {
    this.booksService.search(this.searchQuery).subscribe((data) => {
      console.log(data);
      this.searchResults = data;
      this.booksService.result = data;
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
