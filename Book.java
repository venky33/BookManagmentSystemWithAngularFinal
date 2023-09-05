package com.demo.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Book {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;

@Column(length = 40)
private String name;

@Column(length = 40)
private String author;
}
