CREATE TABLE IF NOT EXISTS helo_users (
    id SERIAL,
    helo_id INTEGER,
    firstName TEXT,
    lastName TEXT,
    hobby TEXT,
    email TEXT UNIQUE
);