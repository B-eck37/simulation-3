INSERT into helo_users (firstName, lastName, hobby) VALUES ($1, $2, $3)
RETURNING *;