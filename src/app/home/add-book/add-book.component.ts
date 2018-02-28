import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newItemForm: FormGroup;

  constructor(private _bookService: BookService, private router: Router) {
    this.newItemForm = new FormGroup({
      'book_name': new FormControl('', Validators.required),
      'book_author': new FormControl('', Validators.required),
      'book_city': new FormControl('', Validators.required),
      'book_desc': new FormControl('', Validators.required),
      'book_year': new FormControl('', Validators.required),
      'book_adder': new FormControl(localStorage.getItem('username'), Validators.required),
      'book_cover': new FormControl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrCVqdNZlSSMTaHKOojx-JD7u2ucpiVRBCu7qdSvbVURmCdqXj'),
      // 'catagorey': new FormControl('', Validators.required)
    })
   }

  ngOnInit() {
  }

  submitForm() {
    this._bookService.insertBook(this.newItemForm.value)
      .then(() => {
        this.newItemForm.reset();
        console.log('added');
      })
  }
}