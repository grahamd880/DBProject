CREATE TABLE customer(
	username VARCHAR(255) PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	logged_on BOOLEAN NOT NULL,
	registration_date TIMESTAMP
);

CREATE TABLE employee(
	username VARCHAR(255) PRIMARY KEY NOT NULL,
	name VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	logged_on BOOLEAN NOT NULL,
	admin BOOLEAN NOT NULL,
	employs VARCHAR(255)
);

CREATE TABLE contact_info(
	email VARCHAR(255) UNIQUE NOT NULL,
	phone INTEGER,
	address VARCHAR(255),
	username VARCHAR(255) NOT NULL
);

CREATE TABLE reviews(
	id INT PRIMARY KEY NOT NULL,
	item_number INT NOT NULL,
	username VARCHAR(255) NOT NULL,
	comment TEXT
);

CREATE TABLE item(
	item_number INT PRIMARY KEY NOT NULL,
	brand VARCHAR(255),
	price FLOAT,
	quantity_in_stock INT,
	picture VARCHAR(255)
);

CREATE TABLE shoe(
	item_number INT NOT NULL,
	gender CHAR,
	size FLOAT NOT NULL,
	color VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL
);

CREATE TABLE clothing(
	item_number INT NOT NULL,
	gender CHAR,
	size VARCHAR(5) NOT NULL,
	color VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL
);

CREATE TABLE watch(
	item_number INT NOT NULL,
	gender CHAR,
	color VARCHAR(255) NOT NULL,
	model VARCHAR(255) NOT NULL
);

CREATE TABLE payment_info(
	card_number INT PRIMARY KEY NOT NULL,
	billing_address VARCHAR(255) NOT NULL,
	name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL
);

CREATE TABLE shopping_cart(
	cart_number INT NOT NULL,
	username VARCHAR(255) NOT NULL,
	item_number INT NOT NULL,
	quantity INT NOT NULL
);

CREATE TABLE customer_order(
	order_number INT PRIMARY KEY NOT NULL,
	cart_number INT NOT NULL,
	username VARCHAR(255) NOT NULL,
	total_price INT NOT NULL
);

CREATE TABLE customer_order_shipped(
	username VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
	order_number INT NOT NULL,
	shipped BOOLEAN NOT NULL
);
