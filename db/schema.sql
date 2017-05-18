-- Create DB
CREATE DATABASE burgers_db;
USE burgers_db;

/*
     * **id**: an auto incrementing int that serves as the primary key.
     * **burger_name**: a string.
     * **devoured**: a boolean.
     * **date**: a TIMESTAMP.
*/

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    data TIMESTAMP
);

