DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL UNIQUE,
            birthday  DATE DEFAULT,
            salary INT
);

