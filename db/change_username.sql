update lax_site_users
set username = ${username}
where userid = ${userid}
returning *;