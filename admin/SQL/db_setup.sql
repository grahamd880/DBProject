USE runnersGlobal;

DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS contact_info;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS item;
DROP TABLE IF EXISTS shoe;
DROP TABLE IF EXISTS clothing;
DROP TABLE IF EXISTS watch;
DROP TABLE IF EXISTS payment_info;
DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS customer_order;
DROP TABLE IF EXISTS customer_order_shipped;


CREATE TABLE person(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	username VARCHAR(255) UNIQUE NOT NULL,
	firstName VARCHAR(255) NOT NULL,
	middleName VARCHAR(255) NULL,
	lastName VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	logged_on BOOLEAN NOT NULL
);

INSERT INTO person(username, firstName, middleName, lastName, password, logged_on) VALUES ('grahamdj','David',NULL,'Graham', 'chang3m3', false);
INSERT INTO person(username, firstName, middleName, lastName, password, logged_on) VALUES ('nrowbot','Nate',NULL,'Rowbotham', 'chang3m3', false);
INSERT INTO person(username, firstName, middleName, lastName, password, logged_on) VALUES ('nkelley','Nate',NULL,'Kelley', 'chang3m3', false);


CREATE TABLE customer(
	id INT NOT NULL,
	registration_date TIMESTAMP
);

INSERT INTO customer(id) VALUES(3);

CREATE TABLE employee(
	id INT NOT NULL,
	admin BOOLEAN NOT NULL
);

INSERT INTO employee(id, admin) VALUES (1,true);
INSERT INTO employee(id, admin) VALUES (2,false);

CREATE TABLE contact_info(
	id INT NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	phone VARCHAR(12) UNIQUE NULL,
	streetAddress VARCHAR(255) NULL,
	city VARCHAR(255) NULL,
	state VARCHAR(255) NULL,
	zipcode VARCHAR(255) NULL

);

INSERT INTO contact_info(id,email,phone,streetAddress,city,state,zipcode) VALUES (1,'grahamd880@gmail.com',4807359541,'4214 E Caroline ln','gilbert','Arizona','85296');
INSERT INTO contact_info(id,email,phone,streetAddress,city,state,zipcode) VALUES (2,'natethegreatrobot@gmail.com',null,null,null,null,null);
INSERT INTO contact_info(id,email,phone,streetAddress,city,state,zipcode) VALUES (3,'natekelley@gmail.com',null,null,null,null,null);


CREATE TABLE reviews(
	id INT PRIMARY KEY NOT NULL,
	item_number INT NOT NULL,
	personID INT NOT NULL,
	comment TEXT NOT NULL
);

CREATE TABLE item(
	item_number INT PRIMARY KEY NOT NULL,
	brand VARCHAR(255) NOT NULL,
	price FLOAT NOT NULL,
	quantity_in_stock INT NOT NULL,
	model VARCHAR(255) NOT NULL,
	picture VARCHAR(255)
);

CREATE TABLE shoe(
	item_number INT NOT NULL,
	gender CHAR NOT NULL,
	size FLOAT NOT NULL,
	color VARCHAR(255) NOT NULL,
	quantity_in_color INT NOT NULL
);

CREATE TABLE clothing(
	item_number INT NOT NULL,
	gender CHAR NOT NULL,
	size VARCHAR(5) NOT NULL,
	color VARCHAR(255) NOT NULL
);

CREATE TABLE watch(
	item_number INT NOT NULL,
	gender CHAR NOT NULL,
	color VARCHAR(255) NOT NULL
);

CREATE TABLE payment_info(
	personID INT NOT NULL,
	card_number VARCHAR(255) UNIQUE NOT NULL,
	billing_street_address VARCHAR(255) NOT NULL,
	billing_city VARCHAR(255) NOT NULL,
	billing_state VARCHAR(255) NOT NULL,
	billing_zip VARCHAR(255) NOT NULL,
	firstName VARCHAR(255) NOT NULL,
	middleName VARCHAR(255) NULL,
	lastName VARCHAR(255) NOT NULL
);

CREATE TABLE shopping_cart(
	cart_number INT NOT NULL,
	personID INT NOT NULL,
	item_number INT NOT NULL,
	quantity INT NOT NULL
);

CREATE TABLE customer_order(
	order_number INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	cart_number INT NOT NULL,
	total_price INT NOT NULL,
	shipping_street_address VARCHAR(255) NOT NULL,
	shipping_city VARCHAR(255) NOT NULL,
	shipping_state VARCHAR(255) NOT NULL,
	shipping_zip VARCHAR(255) NOT NULL
);

CREATE TABLE customer_order_shipped(
	order_number INT NOT NULL,
	shipped BOOLEAN NOT NULL
);
