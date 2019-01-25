select * from lax_site_cart
-- join lax_site_users
-- on lax_site_cart.userid = lax_site_users.userid
join lax_site_items
on lax_site_cart.itemid = lax_site_items.itemid
where lax_site_cart.userid = ${userid}