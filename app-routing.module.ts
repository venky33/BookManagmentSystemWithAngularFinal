import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebookComponent } from './createbook/createbook.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'create-book',component:CreatebookComponent},
  {path:'get-book',component:BookListComponent},
  {path:'update-book/:id',component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
