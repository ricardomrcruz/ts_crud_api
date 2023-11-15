-- SQLite

-- create a table ad

-- CREATE TABLE ad2 
-- (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     title VARCHAR(100) NOT NULL,
--     description TEXT,
--     author VARCHAR(100) NOT NULL,
--     price INT, 
--     createdAt DATE,
--     picture VARCHAR(100),
--     location VARCHAR(100),
--     id_cat INTEGER,
--     FOREIGN KEY (id_cat) REFERENCES category(id_cat)
-- );

-- SELECT * FROM ad2;

-- DROP TABLE ad;

-- SELECT *
-- FROM ad2
-- JOIN category ON ad2.id_cat = category.id_cat;

-- ALTER TABLE ad
-- ADD COLUMN id_cat INTEGER;

    -- ALTER TABLE ad
    -- ADD CONSTRAINT FK_id_cat
    -- FOREIGN KEY (id_cat) REFERENCES category(id_cat);



-- -- insert the tavetements
-- INSERT INTO ad2 (title, description, author, price, createdAt, picture, location, id_cat) VALUES 
-- ('Chemise Polo', 'Neuf, jamais porté, taille M', 'marie@leblanc.fr', 25, '2023-11-10', 'https://image.fr/chemise.jpg', 'Lyon', 'vetements'),
-- ('Vélo de ville', 'Bon état, peu servi', 'pierre@moreau.fr', 150, '2023-11-09', 'https://image.fr/velo.jpg', 'Paris', 'voiture'),
-- ('Lampe design', 'Lampe moderne en très bon état', 'luc@bernard.fr', 40, '2023-09-01', 'https://image.fr/lampe.jpg', 'Bordeaux', 'autre'),
-- ('Sac à main en cuir', 'Sac de marque, utilisé mais en bon état', 'sophie@martin.fr', 70, '2023-11-07', 'https://image.fr/sac.jpg', 'Lyon', 'vetements'),
-- ('Guitare acoustique', 'Très peu utilisée, comme neuve', 'olivier@petit.fr', 12, '2023-09-01', 'https://image.fr/guitare.jpg', 'Paris', 'autre'),
-- ('Smartphone dernier cri', 'En parfait état, avec garantie', 'claire@roux.fr', 300, '2023-11-05', 'https://image.fr/smartphone.jpg', 'Bordeaux', 'autre'),
-- ('Chaussures de randonnée', 'Taille 42, état neuf', 'jean@lefebvre.fr', 50, '2023-09-01', 'https://image.fr/chaussures.jpg', 'Lyon', 'vetements'),
-- ('Ordinateur portable', 'Modèle récent, parfait pour le gaming', 'emilie@richard.fr', 800, '2023-11-03', 'https://image.fr/ordinateur.jpg', 'Paris', 'autre'),
-- ('Appareil photo reflex', 'Idéal pour les amateurs de photographie', 'francois@simon.fr', 35, '2023-11-02', 'https://image.fr/camera.jpg', 'Bordeaux', 'autre'),
-- ('Casque audio', 'Haute qualité sonore, presque neuf', 'laura@dupuis.fr', 60, '2023-11-01', 'https://image.fr/casque.jpg', 'Lyon', 'autre'),
-- ('Montre connectée', 'Fonctions sportives, très bon état', 'julien@blanc.fr', 90, '2023-09-01', 'https://image.fr/montre.jpg', 'Paris', 'autre'),
-- ('Table en bois massif', 'Belle table robuste pour salle à manger', 'anne@leroy.fr', 200, '2023-10-30', 'https://image.fr/table.jpg', 'Bordeaux', 'autre'),
-- ('Console de jeux dernière génération', 'Peu utilisée, avec jeux', 'nicolas@morin.fr', 400, '2023-10-29', 'https://image.fr/console.jpg', 'Lyon', 'autre'),
-- ('Trottinette électrique', 'Bonne autonomie, idéale pour la ville', 'isabelle@nguyen.fr', 25, '2023-10-28', 'https://image.fr/trottinette.jpg', 'Paris', 'autre'),
-- ('Livre de cuisine', 'Recettes traditionnelles françaises', 'remy@robin.fr', 15, '2023-10-27', 'https://image.fr/livre.jpg', 'Bordeaux', 'autre'),
-- ('Cafetière expresso', 'Machine à café de marque, très peu servie', 'helene@rey.fr', 20, '2023-10-26', 'https://image.fr/cafetiere.jpg', 'Lyon', 'autre'),
-- ('Téléviseur 4K', 'Grand écran, haute définition', 'alex@fournier.fr', 550, '2023-10-25', 'https://image.fr/tv.jpg', 'Paris', 'autre'),
-- ('Veste en cuir', 'Style motard, taille L', 'valerie@gaillard.fr', 100, '2023-10-24', 'https://image.fr/veste.jpg', 'Bordeaux', 'vetements'),
-- ('Planche de surf', 'Parfait état, idéale pour débutants', 'david@roussel.fr', 180, '2023-10-23', 'https://image.fr/surf.jpg', 'Lyon', 'voiture'),
-- ('Enceinte Bluetooth', 'Son de haute qualité, portable', 'caroline@fabre.fr', 110, '2023-10-22', 'https://image.fr/enceinte.jpg', 'Paris', 'autre');

-- select everything

--    SELECT * FROM ad;
   --DELETE * FROM ad;

--  SELECT * FROM ad WHERE location = "Bordeaux";

  --DELETE FROM ad WHERE price > 40;

--  UPDATE ad SET price = 0 WHERE createdAt = "2023-09-01";

--  SELECT AVG(Price)  FROM ad WHERE location = "Paris";

-- SELECT AVG(Price), location
--         FROM ad WHERE location = "Paris" 
--     UNION
-- SELECT AVG(Price), location
--         FROM ad WHERE location = "Bordeaux" 
--     UNION
-- SELECT AVG(Price), location
--         FROM ad WHERE location = "Lyon" ;

-- SELECT location, AVG(price) FROM ad GROUP BY location;


