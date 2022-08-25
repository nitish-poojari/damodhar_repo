assignment 1 : 
CREATE 'student_db' database
CREATE following TABLEs in database with proper data types
student: id (PK), name, address, phone, email, age, schoolId (FK)
school: id (PK), name, address, principal, phone
CREATE relationship as shown in the TABLE schema
add some dummy data

assignment 1 Answer :

CREATE DATABASE student_db;
USE student_db;

CREATE TABLE student(id INT PRIMARY KEY identity(1,1),name VARCHAR(50) NOT NULL,address VARCHAR(50) NOT NULL,phone VARCHAR(12) NOT NULL,
email VARCHAR(20) ,age INT,schoolid INT, FOREIGN KEY(schoolid) REFERENCES school(id));
  
CREATE TABLE school(id INT PRIMARY KEY identity(1,1),name VARCHAR(50) NOT NULL,address VARCHAR(50) NOT NULL,principal VARCHAR(50) NOT NULL,phone VARCHAR(12) NOT NULL);


INSERT INTO school(name,address,principal,phone) VALUES ('Mit Aurangabad','Aurangabad maharashtra','prof. Patil','5473665441'),
('MGM school','Mumbai maharashtra','prof. Jadhao ','8999969670');
SELECT * FROM school ;

INSERT INTO student(name,address,phone,email,age,schoolid) VALUES ('damodhar','Buldhana Maharashtra','2345678890','damodhar@gmail.com',22,3),
('vishal','jalna Maharashtra','9145678906','vishal@gmail.com',20,1);
SELECT * FROM student;

assignment 2 : 

CREATE 'product_db' databse
CREATE following TABLEs
categories: id (PK), title, description
products: id (PK), title, price, description, category (FK), company
orders: id (PK), total, date
order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
CREATE relationship as shown in the TABLE schema

assignment 2 Answer :

CREATE DATABASE product_db;
USE product_db;
CREATE TABLE categories( id INT PRIMARY KEY identity(1,1), title VARCHAR(50), description VARCHAR(50));
SELECT * FROM categories;

CREATE TABLE products(id INT PRIMARY KEY identity(1,1),title VARCHAR(60),price INT,description VARCHAR(50),
category INT,company VARCHAR(50) FOREIGN KEY (category) REFERENCES categories(id)) ;
SELECT * FROM products;

CREATE TABLE orders1( id INT PRIMARY KEY identity(1,1), total INT, date VARCHAR(50));
SELECT * FROM orders1;
 
CREATE TABLE order_details(id INT PRIMARY KEY identity(1,1),orderId INT,productId INT ,quqntity INT ,price INT ,
totalprice INT,discount INT,FOREIGN KEY (orderId) REFERENCES  orders1(id), FOREIGN KEY (productId) REFERENCES  products(id))  ;
