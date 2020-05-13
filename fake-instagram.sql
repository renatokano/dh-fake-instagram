CREATE SCHEMA IF NOT EXISTS `fake_instagram` DEFAULT CHARACTER SET utf8 ;
USE `fake_instagram` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE users (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(192) NOT NULL,
  `email` VARCHAR(192)  UNIQUE NOT NULL,
  `username` VARCHAR(45) UNIQUE NOT NULL,
  `password` VARCHAR(192) NOT NULL,
  `avatar` VARCHAR(192),
  `created_at` DATETIME,
  `updated_at` DATETIME
  );


-- -----------------------------------------------------
-- Table `mydb`.`publications`
-- -----------------------------------------------------
CREATE TABLE publications(
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `image` VARCHAR(192),
  `like` INT,
  `created_at`DATETIME,
  `updated_at` DATETIME,
  `users_id` INT NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users (id)
    );


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fake_instagram`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` TEXT,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  `publications_id` INT NOT NULL,
  FOREIGN KEY (publications_id) REFERENCES publications (id),
  `user_id` INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
  );

