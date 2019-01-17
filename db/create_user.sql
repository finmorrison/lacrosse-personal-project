INSERT INTO lax_site_users
(
  username, hash
)
VALUES
(
  ${username}, ${hash}
)
returning *