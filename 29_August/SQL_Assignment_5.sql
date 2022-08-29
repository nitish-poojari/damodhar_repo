 USE hr_db;

  1)  Display first name and last name after converting the first letter of each name to upper case and the rest to lower case.
 select * from employees;
 SELECT UPPER (SUBSTRING (FIRST_NAME,1,1) + LOWER(SUBSTRING (FIRST_NAME,2,LEN(FIRST_NAME)-1)) AS FIRST_NAME, 
 SELECT UPPER (SUBSTRING (LAST_NAME,1,1) + LOWER(SUBSTRING (LAST_NAME,2,LEN(LAST_NAME)-1)) AS LAST_NAME FROM employees;


 2) Display the first word in job title.
 select * from JOBS;
 SELECT SUBSTRING (JOB_TITLE,1,7) AS TITLE FROM jobs;

 3) Display the length of first name for employees where last name contain character �b� after 3rd position.
 SELECT * FROM employees;
 SELECT LEN(FIRST_NAME) AS FNAME,LAST_NAME FROM employees WHERE LAST_NAME LIKE '__B%';

 4) Display first name in upper case and email address in lower case for employees where the first name and email address are same irrespective of the case.
 SELECT * FROM employees;
 SELECT UPPER(FIRST_NAME) AS FNAME ,LOWER(EMAIL) AS email FROM employees;


 5) Display first name, salary, and round the salary to thousands
 SELECT FIRST_NAME,CAST (SALARY AS INT) FROM employees;

 6) Display employee ID and the date on which he ended his previous job.
 SELECT * FROM employees;
 SELECT e.EMPLOYEE_ID AS EMPID,j.END_DATE AS PRE_JOB FROM employees e RIGHT OUTER JOIN job_history j ON e.EMPLOYEE_ID=j.EMPLOYEE_ID;

 7) Display first name and experience of the employees.

 SELECT EMPLOYEE_ID, CONVERT (VARCHAR (10) ,SUM(DATEDIFF(MONTH,START_DATE,END_DATE))/12)+'YEARS' 
 + CONVERT (VARCHAR (10) ,SUM(DATEDIFF(MONTH,START_DATE,END_DATE))%12)+'MONTHS' AS 'EMP EXP IN MONTHS' FROM job_history group by EMPLOYEE_ID;


 8) Display first name of employees who joined in 2001.
 SELECT * FROM employees;
 SELECT e.FIRST_NAME AS first_name FROM employees e WHERE YEAR(HIRE_DATE)=2001;


 9)Display employees who joined in the current year.
 SELECT * FROM employees;
 SELECT e.FIRST_NAME AS first_name FROM employees e WHERE YEAR(HIRE_DATE)=YEAR(GETDATE());\

 10) Display the number of days between system date and 1st January 2011.
 SELECT DATEDIFF(DAY,2011-01-01,GETDATE())AS DAY_DIF;

 11) Display number of employees joined after 15th of the month.
 SELECT COUNT(EMPLOYEE_ID) AS COUNT_EMP_JOIN FROM employees WHERE DAY(HIRE_DATE) > 15;

 12) Display third highest salary of employees.
 SELECT TOP 1 SALARY AS THIRD_HIGH FROM (SELECT DISTINCT TOP 3 SALARY FROM employees ORDER BY SALARY DESC) RESULT ;
