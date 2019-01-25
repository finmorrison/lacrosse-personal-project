delete from lax_site_cart
where userid = ${userid} and cartid = ${cartid};
select * from lax_site_cart
join lax_site_items
on lax_site_cart.itemid = lax_site_items.itemid
where lax_site_cart.userid = ${userid}
