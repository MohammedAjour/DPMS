BEGIN;

DROP TABLE IF EXISTS users, customers, debts CASCADE;


CREATE TABLE users(
id SERIAL PRIMARY KEY,
username VARCHAR(100) NOT NULL ,
password VARCHAR(100) NOT NULL,
email VARCHAR NOT NULL UNIQUE,
address TEXT NOT NULL DEFAULT 'gaza'
);

CREATE TABLE customers(
id SERIAL PRIMARY KEY,
customername VARCHAR(100) NOT NULL,
phone VARCHAR(20) NOT NULL,
address TEXT NOT NULL,
user_id INTEGER REFERENCES users(id)
);

CREATE TABLE debts(
id SERIAL PRIMARY KEY,
debt_type VARCHAR(100) NOT NULL,
debt_quantity INTEGER NOT NULL,
debt_price REAL NOT NULL,
dept_date TIMESTAMP DEFAULT now(),
customer_id INTEGER REFERENCES customers(id)
);

insert into users (username, password, email) values ('sami','123456','ahmed@gmail.com');
insert into users (username, password, email) values ('ahmed','123456','eslam@gmail.com');
insert into users (username, password, email) values ('khaled','123456','khaled@gmail.com');

insert into customers (customername, phone, address, user_id) values ('kamal','0599544558','gaza',1);
insert into customers (customername, phone, address, user_id) values ('saleem','0592845214','north',2);

insert into debts (debt_type, debt_quantity, debt_price, customer_id)
  values ('tea',2,5.2, 1);
insert into debts (debt_type, debt_quantity, debt_price, customer_id)
  values ('coffee',1,8, 1);
insert into debts (debt_type, debt_quantity, debt_price, customer_id)
  values ('sugar',3,3.5, 1);
insert into debts (debt_type, debt_quantity, debt_price, customer_id)
  values ('milk',2,12, 2);
insert into debts (debt_type, debt_quantity, debt_price, customer_id)
  values ('water',2,2, 2);



COMMIT;
