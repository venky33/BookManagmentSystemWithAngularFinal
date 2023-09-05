 package com.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Entity.Book;
import com.demo.Service.BookService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class BookController {

	@Autowired
	private BookService bookService;
	
	@PostMapping("/createBook")

	ResponseEntity<Book> createBook(@RequestBody Book book)
	{
		return new ResponseEntity<Book>(bookService.createBook(book),HttpStatus.CREATED);
	}

	@GetMapping("/getAllBooks")
	List<Book> getAllStudents()
	{
		return bookService.getAllBooks();
	}
	
	@PutMapping("/updateBook/{id}")
	ResponseEntity<Book> updateBookById(@PathVariable("id") int id,@RequestBody Book book)
	{
		return new ResponseEntity<Book>(bookService.updateBookById(id, book),HttpStatus.OK);
	}
	
	@GetMapping("/getBookById/{id}")
	ResponseEntity<Book> getBookById(@PathVariable int id)
	{
		return new ResponseEntity<Book>(bookService.getBookById(id),HttpStatus.OK);
	}

	@DeleteMapping("/deleteBook/{id}")
	void deleteBookById(@PathVariable("id") int id) 
	{
		bookService.deleteBookById(id);
	}
}
