CREATE DATABASE devblog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  title VARCHAR NOT NULL UNIQUE,
  author VARCHAR NOT NULL,
  body VARCHAR NOT NULL,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);
