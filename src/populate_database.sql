SELECT * FROM category;
SELECT * FROM licence;
SELECT * FROM product;

-- reset autoincrement
ALTER TABLE product AUTO_INCREMENT = 1;

INSERT INTO licence (licence_id, licence_name, licence_description, licence_image) VALUES 
	(1, 'Star Wars & The Mandalorian', 'Disfruta de una saga que sigue afregando personajes a su coleccion', '/img/star-wars/baby-yoda-1.webp'),
	(2 , 'Pokémon Indigo', 'Atrapa todos los que puedas y disfruta de una coleccion llena de amigos', '/img/pokemon/vulpix-1.webp'),
	(3, 'Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto', '/img/harry-potter/snape-patronus-1.webp');

INSERT INTO category (category_id, category_name) VALUES 
	(1, 'Figuras coleccionables'),
	(2, 'Llaveros'),
	(3, 'Remeras');

INSERT INTO product (product_name, product_description, price, stock, dues, sku, image_front, image_back, category_id, licence_id) VALUES
('Pidgeotto', 'Figura coleccionable pokemon', 1799.99, 50, 12, 'PKM001001', '/img/pokemon/pidgeotto-1.webp', '/img/pokemon/pidgeotto-box.webp', 1, 2),
('Charmander', 'Figura coleccionable pokemon', 2299.99, 100, 3, 'PKM001002', '/img/pokemon/charmander-1.webp', '/img/pokemon/charmander-box.webp', 1, 2),
('Pikachu', 'Figura coleccionable pokemon', 2699.99, 100, 0, 'PKM001003', '/img/pokemon/pikachu-1.webp', '/img/pokemon/pikachu-box.webp', 1, 2),
('Vulpix', 'Figura coleccionable pokemon', 2799.99, 100, 9, 'PKM001004', '/img/pokemon/vulpix-1.webp', '/img/pokemon/vulpix-box.webp', 1, 2),
('Harry Potter', 'Figura coleccionable Harry Potter', 2399.99, 40, 6, 'HP001005', '/img/harry-potter/harry-1.webp', '/img/harry-potter/harry-box.webp' , 1, 3),
('Hermione Granger', 'Figura coleccionable Harry Potter', 2399.99, 40, 6, 'HP001006', '/img/harry-potter/hermione-1.webp', '/img/harry-potter/hermione-box.webp', 1, 3),
('Luna Lovegood Lionmask', 'Figura coleccionable Harry Potter', 1999.99, 40, 18, 'HP001007', '/img/harry-potter/luna-1.webp', '/img/harry-potter/luna-box.webp', 1, 3),
('Baby Yoda', 'Figura coleccionable Star Wars', 1799.99, 40, 18, 'SW001008', '/img/star-wars/baby-yoda-1.webp', '/img/star-wars/baby-yoda-box.webp', 1, 1),
('Bobbafeth', 'Figura coleccionable Star Wars', 1799.99, 40, 24, 'SW001009', '/img/star-wars/bobbafeth-1.webp', '/img/star-wars/bobbafeth-box.webp', 1, 1),
('Stormtrooper', 'Figura coleccionable Star Wars', 1799.99, 40, 3, 'SW001010', '/img/star-wars/trooper-1.webp', '/img/star-wars/trooper-box.webp', 1, 1);