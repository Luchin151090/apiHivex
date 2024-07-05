CREATE SCHEMA personal;
CREATE SCHEMA habitat;
CREATE SCHEMA conjunto;

CREATE TABLE personal.apicultor(
    id serial primary key,
    nombre varchar(200),
    apellidos varchar(300),
    dni varchar(20)
);

CREATE TABLE habitat.colmena(
    id serial primary key,
    nombre varchar(300),
    material varchar(200),
    tipo varchar(200),
    ancho float,
    largo float,
    alto float,
    rayos_uv float,
    humedad float,
    temperatura float,
    frecuencia_sonido float,
    apicultor_id int,
    poblacion_id int
);

CREATE TABLE conjunto.abeja(
    id serial primary key,
    nombre varchar(200),
    tamanio float,
    familia varchar(300),
    tipo varchar(200),
    especie varchar(200),
    poblacion_id int

);

CREATE TABLE conjunto.poblacion(
    id serial primary key,
    nombre varchar(200),
    cantidad int,
    edad_promedio int
);

CREATE TABLE habitat.recordatorio(
    id serial primary key,
    nombre varchar(50), -- traslarve,
    fecha_inicio date,
    fecha_fin date,
    descripcion varchar(2000),
    colmena_id int
);

-- RELACIONES CONJUNTO
ALTER TABLE conjunto.abeja ADD CONSTRAINT fk_poblacion_abeja FOREIGN KEY (poblacion_id) REFERENCES conjunto.poblacion(id) ON DELETE CASCADE ON UPDATE CASCADE;

-- RELACIONES HABITAT
ALTER TABLE habitat.colmena ADD CONSTRAINT fk_apicultor_colmena FOREIGN KEY (apicultor_id) REFERENCES personal.apicultor(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE habitat.colmena ADD CONSTRAINT fk_poblacion_colmena FOREIGN KEY (poblacion_id) REFERENCES conjunto.poblacion(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE habitat.recordatorio ADD CONSTRAINT fk_recordatorio_colmena FOREIGN KEY (colmena_id) REFERENCES habitat.colmena(id) ON DELETE CASCADE ON UPDATE CASCADE;


SELECT setval('habitat.colmena_id_seq', 1, false);
