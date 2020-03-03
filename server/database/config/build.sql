BEGIN;

DROP TABLE IF EXISTS cities CASCADE;

CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL, 
  name VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL
);

INSERT INTO cities(name, city) VALUES
('Mohammed', 'Gaza'),
('Martina', 'Germany'),
('Holly', 'London');


COMMIT;