CREATE DATABASE ng_reclamos_db;

USE ng_reclamos_db;

CREATE TABLE reclamos(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dni_cliente INT(11),
    nombre VARCHAR(40),
    apellidos VARCHAR(40),
    telefono VARCHAR(40),
    email VARCHAR(40),
    direccion_domicilio VARCHAR(255),
    distrito VARCHAR(255),
    asunto_reclamo VARCHAR(100),
    descripcion_reclamo VARCHAR(255),
    imagen VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT FROM*reclamos;