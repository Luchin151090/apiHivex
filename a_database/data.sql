-- DATA APICULTOR
INSERT INTO personal.apicultor (nombre,apellidos,dni) VALUES ('Franco','Toledo','12344555'),
('Edgar','Valdivia','23454666'),('Leonardo','Leon','8989898');

-- DATA POBLACIÓN
INSERT INTO conjunto.poblacion(nombre,cantidad,edad) VALUES ('Zanganos',300,20),
('Obreras',1500,30);

-- DATA COLMENA
INSERT INTO habitat.colmena(material,tipo,ancho,largo,alto,rayos_uv,humedad,temperatura,frecuencia_sonido,apicultor_id,poblacion_id)
VALUES('Madera','Criadero',45.6,27.5,25.0,0.5,0.6,0.7,0.8,1,1);

-- DATA ABEJA
INSERT INTO conjunto.abeja(nombre,tamanio,familia,tipo,especie,poblacion_id)
VALUES('Obrera',1.0,'Apiade','t','e',1);