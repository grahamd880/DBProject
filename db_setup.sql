CREATE TABLE customer(
	username VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
	password VARCHAR(255),
	logged_on BOOLEAN,
	registration_date TIMESTAMP
);

CREATE TABLE employee(
	username VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255),
	password VARCHAR(255),
	logged_on BOOLEAN,
	admin BOOLEAN,
	employs VARCHAR(255)
);
