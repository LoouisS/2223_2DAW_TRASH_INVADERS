BEGIN;

-- Creación de base de datos Trash Invaders.
CREATE DATABASE IF NOT EXISTS trashinvaders DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

-- Creación de tablas.
USE trashinvaders;

-- Creacion de la tabla usuario
CREATE TABLE IF NOT EXISTS usuario (
    idUsuario smallint UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nickname char(3) NOT NULL,
    contrasenia varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla partida
CREATE TABLE IF NOT EXISTS partida (
    idPartida int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    puntuacion int UNSIGNED NOT NULL,
    idUsuario smallint UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla imagenes
CREATE TABLE IF NOT EXISTS imagen(
    idImagen int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    imagen MEDIUMBLOB NOT NULL,
    hash VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla mejora
CREATE TABLE IF NOT EXISTS mejora (
    idMejora tinyint UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(120) NOT NULL,
    multiplicador TINYINT UNSIGNED NULL,
    duracion_mejora TINYINT UNSIGNED NULL,
    porcentaje_aparicion TINYINT UNSIGNED NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla administrador
CREATE TABLE IF NOT EXISTS administrador(
    idAdmin char(3) NOT NULL,
    contrasenia varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE IF NOT EXISTS parametros(
    velocidad_basura tinyint unsigned NOT NULL,
    generacion_basura tinyint unsigned NOT NULL,
    tiempo_espera tinyint unsigned NOT NULL,
    prob_aparicion_mejora tinyint unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE IF NOT EXISTS usuario_imagen_mejora(
    id_usuario_imagen_mejora int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idUsuario smallint UNSIGNED NOT NULL,
    idImagen int UNSIGNED NOT NULL,
    idMejora tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- CONSTRAINTS A INCLUIR

ALTER TABLE partida ADD CONSTRAINT FK_partida_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario);

ALTER TABLE usuario_imagen_mejora ADD CONSTRAINT FK_usuario_imagen_mejora_usuario FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario);
ALTER TABLE usuario_imagen_mejora ADD CONSTRAINT FK_usuario_imagen_mejora_imagen FOREIGN KEY (idImagen) REFERENCES imagen(idImagen);
ALTER TABLE usuario_imagen_mejora ADD CONSTRAINT FK_usuario_imagen_mejora_mejora FOREIGN KEY (idMejora) REFERENCES mejora(idMejora);

ALTER TABLE usuario_imagen_mejora ADD CONSTRAINT unique_usuario_mejora UNIQUE (idUsuario, idMejora);
ALTER TABLE usuario_imagen_mejora ADD CONSTRAINT unique_usuario_imagen UNIQUE (idUsuario, idImagen);

ALTER TABLE imagen ADD CONSTRAINT unique_hash UNIQUE (hash);

COMMIT;
