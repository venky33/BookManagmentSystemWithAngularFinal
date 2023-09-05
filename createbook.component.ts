import { Component, OnInit } from '@angular/core';
import {Book} from'../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit{

  book:Book=new Book();

  constructor(private bookService: BookService,
    private router:Router){}
  ngOnInit(): void {
    
  }
saveBook(){
this.bookService.createBook(this.book).subscribe(data=>{
  console.log(data);
  this.goTobookList();
})
}

goTobookList()
{
this.router.navigate(['/get-book']);
}

onsubmit()
  {
this.saveBook();
  }
}
