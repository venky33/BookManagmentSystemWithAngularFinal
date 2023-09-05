package com.demo.Service;

import java.util.List;

import com.demo.Entity.Book;

public interface BookService {
Book createBook(Book book);
List<Book> getAllBooks();
Book updateBookById(int id,Book book);
Book getBookById(int id);
void deleteBookById(int id);

}

