import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit{

  book: Book=new Book();
  id!:number;

constructor(private bookService: BookService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.bookService.getBookById(this.id).subscribe(data=>{
   this.book =data;
   },
   error=>console.log(error));
  }

  onSubmit()
  {
this.bookService.updateBook(this.id,this.book).subscribe(data=>{
  console.log(data);
  this.goTobookList();
},
error=>console.log(error));
  }

  goTobookList()
  {
    this.router.navigate(['/get-book']);
  }

}
