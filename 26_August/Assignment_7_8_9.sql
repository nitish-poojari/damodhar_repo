USE sales_db;

Assignment 7 : 



1) Write a query that lists each order number followed by the name of the customer who made the order. 

    SELECT *  FROM orders; 
    SELECT orders.onum,customers.cname  FROM orders ,customers  WHERE orders.cnum=customers.cnum; 

2) Write a query that gives the names of both the salesperson and the customer for each order along  with the order number
  
    SELECT *  FROM salespeople;
    SELECT orders.onum, customers.cname ,salespeople.sname  FROM orders ,customers,salespeople  WHERE orders.cnum=customers.cnum AND customers.snum=salespeople.snum;

3)Write a query that produces all customers serviced by salespeople with a commission above 12%. Output the customer’s name, the salesperson’s name, and the salesperson’s rate of commission.

    SELECT customers.cname,salespeople.sname,salespeople.comm  FROM customers,salespeople  WHERE customers.snum=salespeople.snum AND salespeople.comm>0.12;

4)Write a query that calculates the amount of the salesperson’s commission on each order by a  customer with a rating above 100.

    SELECT amt,comm  FROM salespeople INNER JOIN customers ON salespeople.snum=customers.snum INNER JOIN orders ON customers.snum=orders.snum  WHERE rating>100;

5)Write a query that produces all pairs of salespeople who are living in the same city.Exclude  combinations of salespeople with themselves as well as duplicate rows with the order reversed

    SELECT s.sname,s1.sname,s.city  FROM salespeople s, salespeople s1  WHERE s.city=s1.city AND s.sname>s1.sname;




Assignment 8 :

USE sales_db;
 

1)Write a query that uses a subquery to obtain all orders for the customer named Cisneros. assume  you do not know his customer number (cnum).
 
SELECT * FROM orders; 
SELECT onum FROM orders WHERE orders.cnum=(SELECT cnum FROM customers WHERE cname='Cisneros');

2)Write a query that produces the names and ratings of all customers who have above- average  orders.
SELECT * FROM customers;
SELECT cname,rating FROM customers WHERE cnum IN(SELECT cnum FROM orders WHERE amt > (SELECT avg(amt) FROM orders));

3)Write a query that selects the total amount in orders for each salesperson for whom this total is greater than the amount of the largest order in the table.
 
 SELECT SUM(amt) AS total FROM orders GROUP BY snum HAVING SUM(amt)>(SELECT MAX(amt)FROM orders); 

 
4)Write a query that selects all customers whose ratings are equal to or greater than ANY of Serres

SELECT * FROM customers; 
SELECT * FROM customers WHERE rating >=ANY (SELECT rating FROM customers WHERE snum IN (SELECT snum FROM salespeople WHERE sname='Serres'));

5)Write a query using ANY or ALL that will find all salespeople who have no customers located in  their city.
 
SELECT * FROM customers;
SELECT s.sname,s.city ,c.cname,c.city FROM salespeople s, customers c WHERE s.snum= c.snum AND s.city != c.city;

6)Write a query that selects all orders for amounts greater than any for the customers in London.


SELECT * FROM orders WHERE amt> ANY (SELECT amt FROM orders WHERE cnum IN (SElect cnum FROM customers WHERE city='London'));

7)Extract all the orders of Motika
 
SELECT * FROM  orders;
SELECT * FROM orders WHERE snum=(SELECT snum FROM salespeople WHERE sname='Motika');

8)Find all the order attribute to salespeople servicing customers in London.

SELECT * FROM salespeople;
SELECT * FROM orders WHERE snum IN(SELECT snum FROM salespeople WHERE city='London');

9)Find names and numbers of all salesperson who have more than one customer. 
SELECT * FROM salespeople;
SELECT sname,snum FROM salespeople WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(*)>1);

10)Find salespeople number,name and city who have multiple customers.
SELECT sname,snum,city FROM salespeople WHERE snum IN (SELECT snum FROM customers GROUP BY snum HAVING COUNT(*)>1);

11)Select customers who have a greater rating than any other customer in Rome.

SELECT * FROM customers;
SELECT * FROM customers WHERE rating > ANY(SELECT rating FROM customers WHERE city='Rome');

12)Select all orders that had amounts that were greater that at leASt one of the orders FROM ‘1990-10- 04’ .

SELECT * FROM  orders;
SELECT * FROM orders WHERE amt>(SELECT MIN(amt)FROM orders WHERE odate='1990-10-04');

13)Find all orders with amounts smaller than any amount for a customer in San Jose. 

SELECT * FROM orders WHERE amt < ANY(SELECT amt FROM orders,customers WHERE customers.city='San Jose' AND orders.cnum=customers.cnum);

14)Select those customers whose rating are higher than every customer in Paris.

SELECT * FROM  customers;
SELECT * FROM customers WHERE rating > ALL(SELECT rating FROM customers WHERE city='Paris');



ASSIGNMENT 9 :


  USE sales_db;


   1) Create an index that will enable a user to pull orders for ‘1990-10-03’ out of the Orders table quickly.

  CREATE INDEX DATE_ORDERS ON orders(odate);
  SELECT odate FROM orders GROUP BY odate;


   2)If the Orders table has already been created, how can you force the onum field to be unique (assume all current values are unique)

  SELECT * FROM orders;
  CREATE UNIQUE INDEX FORCE_ONUM ON orders(onum);

  3) Create an index that would permit salesperson to retrieve his orders.

  SELECT * FROM orders;
  SELECT onum,odate,cnum FROM orders WHERE odate=ANY(SELECT odate FROM orders group by odate);

  4) Let us assume that each salesperson is to have only one customer of a given rating, and that this is currently the case. Create an index that enforces it.
  SELECT * FROM customers;
  CREATE INDEX CUSTOMER_RATING ON customers(snum,cnum,rating);

  5) Create an index to speed up searching order on a given date by given customer
  CREATE INDEX SPPED_SEARCHING ON orders(odate,cnum);


    