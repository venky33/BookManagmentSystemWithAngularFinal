import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private addbook="http://localhost:8080/api/createBook";
private getBooks="http://localhost:8080/api/getAllBooks";
private getBook="http://localhost:8080/api/getBookById";
private editBook="http://localhost:8080/api/updateBook";
private delBook="http://localhost:8080/api/deleteBook";
  constructor(private httpClient:HttpClient) { }


  createBook(book:Book):Observable<object>
  {

return this.httpClient.post(`${this.addbook}`,book);
  }
  
  getAllBookList ():Observable<Book[]>
  {
    return this.httpClient.get<Book[]>(`${this.getBooks}`);
  }

  getBookById(id:number):Observable<Book>
  {
    return this.httpClient.get<Book>(`${this.getBook}/${id}`);
  }

  updateBook(id:number,book:Book):Observable<Object>
  {
    return this.httpClient.put(`${this.editBook}/${id}`,book);
  }
  deleteBook(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.delBook}/${id}`);
  }
}
