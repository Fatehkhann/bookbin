import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/book-service.service';

@Component({
  selector: 'app-books-div',
  templateUrl: './books-div.component.html',
  styleUrls: ['./books-div.component.css']
})
export class BooksDivComponent implements OnInit {
  retrievedBooks = [];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks().then((snapshot) => {
      for (var key in snapshot.val()) {
        this.retrievedBooks.push(snapshot.val()[key]);
      }
    })
  }

}
