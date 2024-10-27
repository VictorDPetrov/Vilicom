CREATE DATABASE vilicom;
USE vilicom;

DROP table users;

CREATE TABLE users (
userID INT PRIMARY KEY AUTO_INCREMENT,
firstName VARCHAR(100),
secondName VARCHAR(100),
lastName VARCHAR(100),
phoneNumber VARCHAR(16),
email VARCHAR(200),
username VARCHAR(100),
pass VARCHAR(100)
);