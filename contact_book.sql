
USE contact_book_db;

CREATE TABLE `groups` (
    group_id INT PRIMARY KEY AUTO_INCREMENT,
    group_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    group_id INT,
    FOREIGN KEY (group_id) REFERENCES `groups`(group_id)
);

INSERT INTO `groups` (group_name) VALUES ('Family'), ('Friends'), ('Work');

INSERT INTO contacts (name, email, phone, group_id) VALUES
('Alice Johnson', 'alice@example.com', '123-456-7890', 1),
('Bob Smith', 'bob@example.com', '987-654-3210', 2);






