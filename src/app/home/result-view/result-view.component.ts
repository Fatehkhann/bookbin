import { BookService } from './../../shared/book-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {
  retrievedBooks = [];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this._bookService.getBooks().then((snapshot) => {
      // this.retrievedBooks = snapshot.val();
      for (var key in snapshot.val()) {
        this.retrievedBooks.push(snapshot.val()[key]);
      }
    })
  }

}
