create table lax_site_orders(
    orderid serial primary key,
    userid integer,
    foreign key (userid) references lax_site_users(userid),
    purchase_amount integer,
    cart_arr varchar(1000)
);