assignment 1 : 
create 'student_db' database
create following tables in database with proper data types
student: id (PK), name, address, phone, email, age, schoolId (FK)
school: id (PK), name, address, principal, phone
create relationship as shown in the table schema
add some dummy data

assignment 1 Answer :

create database student_db;
use student_db;
create table student(id int primary key identity(1,1),name varchar(50) not null,address varchar(50) not null,phone varchar(12) not null,
email varchar(20) ,age int,schoolid int, foreign key(schoolid) references school(id));
create table school(id int primary key identity(1,1),name varchar(50) not null,address varchar(50) not null,principal varchar(50) not null,phone varchar(12) not null);


insert into school(name,address,principal,phone) values ('Mit Aurangabad','Aurangabad maharashtra','prof. Patil','5473665441'),
('MGM school','Mumbai maharashtra','prof. Jadhao ','8999969670');
select * from school ;
insert into student(name,address,phone,email,age,schoolid) values ('damodhar','Buldhana Maharashtra','2345678890','damodhar@gmail.com',22,3),
('vishal','jalna Maharashtra','9145678906','vishal@gmail.com',20,1);
select * from student;




assignment 2 : 



create 'product_db' databse
create following tables
categories: id (PK), title, description
products: id (PK), title, price, description, category (FK), company
orders: id (PK), total, date
order_details: id (PK), orderId (FK), productId (FK), quantity, price, totalPrice, discount
create relationship as shown in the table schema
add some dummy data


assignment 2 Answer :


create database product_db;
use product_db;
create table categories( id int Primary Key identity(1,1), title varchar(50), description varchar(50));
select * from categories;

create table products(id int primary key identity(1,1),title varchar(60),price int,description varchar(50),
category int,company varchar(50) foreign key (category) REFERENCES categories(id)) ;
select * from products;

create table orders1( id int Primary Key identity(1,1), total int, date varchar(50));
select * from orders1;
 
 create table order_details(id int primary key identity(1,1),orderId int,productId int ,quqntity int ,price int ,
 totalprice int,discount int,foreign key (orderId) REFERENCES  orders1(id), foreign key (productId) REFERENCES  products(id))  ;
