import { Book } from './book.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class BookService {
  bookList: AngularFireList<any>;
  selectedBook: Book = new Book();

  constructor(private firebaseDB: AngularFireDatabase) { }

  getBooks(){
    return this.firebaseDB.database.ref('books').once('value', (snapshot) => {
      return snapshot.val()
    })
  }
 
  insertBook(book : Book)
  {
    return this.firebaseDB.list('/books').push({
      book_name: book.book_name,
      book_author: book.book_author,
      book_city: book.book_city,
      book_year: book.book_year,
      book_desc: book.book_desc,
      book_cover: book.book_cover
    });
  }
 
  updatebook(book : Book){
    this.bookList.update(book.$key,
      {
        book_name: book.book_name,
        book_author: book.book_author,
        book_city: book.book_city,
        book_year: book.book_year,
        book_desc: book.book_desc,
        book_cover: book.book_cover
      });
  }
 
  deletebook($key : string){
    this.bookList.remove($key);
  }

}
