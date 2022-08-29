Assignment 3 :

Write a query that produces all rows from the Customers table for which the salesperson’s number
is 1001
Write a select command that produces the rating followed by the name of each customer in San
Jose
Write a query that will produce the snum values of all salespeople from the Orders table (with the
duplicate VALUES suppressed)
Write a query that will give you all orders for more than Rs. 1,000
Write a query that will give you the names and cities of all salespeople in London with a
commission above 0.10
Write a query on the Customers table whose output will exclude all customers with a rating <=
100, unless they are located in Rome
What will be the output from the following query? Select * from Orders
WHERE (amt < 1000 OR
NOT (odate = ‘1990-10-03’
AND cnum > 2003));
What will be the output of the following query?
Select * from Orders
WHERE NOT ((odate = ‘1990-10-03’ OR snum >1006) AND amt >= 1500)
Write a query that selects all orders except those with zeroes or NULLs in the amt field.


Assignment 3 Answer : 


CREATE DATABASE sales_db;
USE sales_db;
CREATE TABLE salespeople(snum INT, sname varchar(10), city varchar(10), comm decimal(3,2));

CREATE TABLE customers(cnum INT, cname varchar(10), city varchar(10), rating INT, snum INT);

CREATE TABLE orders(onum INT, amt decimal(7,2), odate date, cnum INT, snum INT);

INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);

INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);

SELECT * FROM  salespeople;
SELECT * FROM  orders;
SELECT * FROM  customers WHERE snum=1001;

SELECT * FROM customers;
SELECT DISTINCT cname,rating FROM customers WHERE city='San Jose';
SELECT  cname,rating FROM customers WHERE city='San Jose';

SELECT * FROM orders;
SELECT DISTINCT snum FROM orders;

SELECT * FROM orders WHERE amt>1000;

SELECT * FROM  salespeople;
SELECT sname FROM salespeople WHERE city='London' AND comm > 0.10;

SELECT * FROM  customers WHERE rating >= 100 and city = 'Rome';
SELECT * FROM orders WHERE (amt < 1000 OR NOT (odate = '1990-10-03' AND cnum > 2003));

SELECT * FROM orders WHERE amt=0 or amt=NULL;
SELECT * FROM orders WHERE NOT ((odate ='1990-10-03' OR snum >1006) AND amt >= 1500);
SELECT * FROM orders;

 

Assignment 4 :


 CREATE DATABASE hr_db;

 1) Write a query to get unique department ID from employee table.

 SELECT DISTINCT department_id  FROM employees;

  2) Write a query to get all employee details from the employee table order by first name, descending.
 SELECT * FROM employees ORDER BY FIRST_NAME DESC; 
 

 3) Write a query to get the employee ID, names (first_name, last_name), salary in ascending order of salary.
 SELECT * FROM employees;
 SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME,SALARY FROM employees ORDER BY SALARY ASC;

 4) Display first name and join date of the employees who is either IT Programmer or Sales Man.
 SELECT * FROM employees;
 SELECT FIRST_NAME,HIRE_DATE FROM employees WHERE JOB_ID='IT_PROG' OR JOB_ID='SA_MAN';

  5) Display details of employee with ID 150 or 160.
 SELECT * FROM employees;
 SELECT * FROM employees WHERE EMPLOYEE_ID=150 OR EMPLOYEE_ID=160 ; 

 6) Display first name, salary, commission pct, and hire date for employees with salary less than 10000
 SELECT * FROM employees;
 SELECT FIRST_NAME,SALARY,COMMISSION_PCT,HIRE_DATE FROM employees WHERE SALARY<10000;

  7) Display employees WHERE the first name or last name starts with S.
 SELECT * FROM employees;
 SELECT * FROM employees WHERE FIRST_NAME LIKE 'S%' OR LAST_NAME LIKE 'S%'; 

  8) Display details of jobs in the descending order of the title.
 SELECT * FROM jobs;
 SELECT * FROM jobs ORDER BY JOB_TITLE DESC;

 9) Display details of the employees where commission percentage is null and salary in the range 5000 to 10000 and department is 30.
  SELECT * FROM employees;
  SELECT * FROM employees WHERE commission_PCT IS NULL AND SALARY BETWEEN 5000 AND 10000 AND DEPARTMENT_ID=30;


  10) Display employees first_name,email who are working in “Executive” department.
 SELECT * FROM employees; 
 SELECT * FROM departments;
 SELECT FIRST_NAME,EMAIL,DEPARTMENT_ID from employees WHERE DEPARTMENT_ID=90;


 11) Display unique contry_id from locations table
 SELECT * FROM locations;
 SELECT DISTINCT COUNTRY_ID FROM locations;


 12) Display all employees whose have job_id IT_PROG and FI_ACCOUNT.
 SELECT * FROM employees WHERE JOB_ID = 'IT_PROG'
 UNION (SELECT * FROM employees WHERE JOB_ID = 'FI_ACCOUNT');


 13) Display all countries in ascending order.
 SELECT * FROM countries;
 SELECT COUNTRY_NAME FROM countries order by COUNTRY_NAME asc;




Assignment 6:


 CREATE DATABASE sales_db;
 USE sales_db;
 CREATE TABLE salespeople(snum INT, sname varchar(10), city varchar(10), comm decimal(3,2));

 CREATE TABLE customers(cnum INT, cname varchar(10), city varchar(10), rating INT, snum INT);

 CREATE TABLE orders(onum INT, amt decimal(7,2), odate date, cnum INT, snum INT);

 INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
 INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
 INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
 INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
 INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

 INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
 INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
 INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
 INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
 INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
 INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
 INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);

 INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
 INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
 INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
 INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
 INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
 INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
 INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
 INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
 INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
 INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);


  1) Write a query that counts the number of salespeople registering orders for each day. (If a salesperson has more than one order on a given day, he or she should be counted only once.).
 SELECT DISTINCT snum FROM orders;

 2) Write a query on the Customers table that will find the highest rating in each city. Put the output in this form: For the city (city), the highest rating is : (rating).
 SELECT * FROM customers;
 SELECT city,MAX(rating) FROM customers GROUP BY city;

 3) Write a query that totals the orders for each day and places the results in descending order

 SELECT * FROM  orders;
 SELECT 'FOR' ,odate, ',there are', COUNT(onum),'orders.' FROM orders GROUP BY odate;
 SELECT odate,COUNT(onum) FROM orders GROUP BY odate ;

 4)Write a query that selects the total amount in orders for each salesperson for whom this total is greater than the amount of the largest order in the table.
 select * FROM orders;
 SELECT sum(amt) FROM orders GROUP BY snum HAVING sum(amt)>  (SELECT max(amt) FROM orders);

 5)Write a query that selects the highest rating in each city.
 SELECT city,MAX(rating) FROM customers GROUP BY city;

 6) Largest order taken by each salesperson with order value more than Rs.3000. 
 SELECT * FROM orders;
 Select odate, snum, max(amt) from orders where amt > 3000 group by odate, snum order by odate,snum;


 7) Select each customer smallest order.
SELECT cnum, min(amt) FROM orders GROUP BY cnum;



 