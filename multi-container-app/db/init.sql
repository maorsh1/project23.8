CREATE TABLE IF NOT EXISTS test (
    id SERIAL PRIMARY KEY,
    data VARCHAR(100)
);

INSERT INTO test (data) VALUES ('Initial data');
