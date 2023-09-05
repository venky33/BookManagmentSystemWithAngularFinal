package com.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Entity.Book;
import com.demo.Repository.BookRepository;
import com.demo.Service.BookService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;
	@Override
	public Book createBook(Book book) {
		// TODO Auto-generated method stub
		return bookRepository.save(book);
	}
	
	@Override
	public List<Book> getAllBooks() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
	}
	
	@Override
	public Book updateBookById(int id, Book book) {
			Book b=bookRepository.findById(id).get();
			b.setName(book.getName());
			b.setAuthor(book.getAuthor());
		
		return bookRepository.save(b);
	}
	
	@Override
	public Book getBookById(int id) {
		return bookRepository.findById(id).get();
	}
	@Override
	public void deleteBookById(int id) {
		bookRepository.deleteById(id);
	}
}
