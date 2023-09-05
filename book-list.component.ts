import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] | undefined;
  
  constructor(private bookService: BookService,
    private router: Router){}
    ngOnInit(): void {
      this.getBookList();
    }
  
  private getBookList()
  {
    this.bookService.getAllBookList().subscribe(data=>{
      this.books=data;
    });
  }
  updateBook(id:number)
  {
  this.router.navigate(['update-book',id]);
  }
  deleteBook(id:number)
{
this.bookService.deleteBook(id).subscribe(data=>{
  console.log(data);
  this.reloadComponent();
},
error=>console.log(error));
}

reloadComponent() {
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.router.onSameUrlNavigation = 'reload';
  this.router.navigate(['/get-book']);
}
}

