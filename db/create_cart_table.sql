create table lax_site_cart
(
cartID serial primary key,
itemID INTEGER,
FOREIGN key (itemID) REFERENCES lax_site_items(itemid),
userID INTEGER,
FOREIGN key (userID) REFERENCES lax_site_users(userid)
)