package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.Entity.Book;

public interface BookRepository extends JpaRepository<Book,Integer> 
{
} 