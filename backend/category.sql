-- SQLite
-- CREATE TABLE category 
-- (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name VARCHAR(50) NOT NULL

-- );

-- ALTER TABLE category
-- RENAME COLUMN id TO id_cat;

--  INSERT INTO category (name) VALUES ('vêtement'),('voiture'),('autre');

--  SELECT * FROM category;
--    SELECT * FROM ad2;



--  ALTER TABLE ad ADD COLUMN id_cat INTEGER:
    -- ,
    -- ADD CONSTRAINT FK_id_cat
    -- FOREIGN KEY (category) REFERENCES category(id_cat);

    -- UPDATE category SET name = "vetements" WHERE name = "vêtement";

-- SELECT ad.title, ad.price, ad.location, ad.id_cat, cat.name 
--     FROM ad2 AS ad
--         INNER JOIN category AS cat ON ad.id_cat = cat.name
--         WHERE cat.name = 'vetements' OR cat.name = 'voiture';

-- SELECT AVG(ad.price) 
--     FROM ad2 AS ad
--         INNER JOIN category AS cat ON ad.id_cat = cat.name
--         WHERE cat.name = 'autre';

-- SELECT ad.title, ad.price, ad.location, ad.id_cat, cat.name 
-- FROM ad2 AS ad
--     INNER JOIN category AS cat ON ad.id_cat = cat.name
--         WHERE cat.name LIKE 'v%';




-- SELECT location, AVG(price) FROM ad GROUP BY location;

-- SELECT st.firstname, st.lastname, sc.city
--        FROM student AS st
--        	INNER JOIN school AS sc ON sc.id = st.school_id
--        WHERE sc.city = 'Bordeaux';
