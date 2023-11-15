--Antonio Manuel Figueroa Pinilla
--Creación de base de datos Trash Invaders.
CREATE DATABASE IF NOT EXIT trashinvaders DEFAULT CHARACTER
SET utf8 COLLATE utf8_spanish_ci;

--Creación de tablas.
USE trashinvaders;

CREATE TABLE usuario(
    idUsuario smallint unsigned AUTO_INCREMENT PRIMARY KEY ,
    nickname char(3) NOT NULL,
    CONSTRAINT CHK_longName CHECK (CHAR_LENGTH(nickname)=3)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE administrador(
    idAdmin char(3) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE parametros(
    velocidad_basura tinyint unsigned NOT NULL,
    generacion_basura tinyint unsigned NOT NULL,
    tiempo_espera tinyint unsigned NOT NULL,
    prob_aparicion_mejora tinyint unsigned NOT NULL,
    CONSTRAINT CHK_trashspeed CHECK (velocidad_basura>=1 AND velocidad_basura<=10),
    CONSTRAINT CHK_trashgen CHECK (generacion_basura>=1 AND generacion_basura<=30),
    CONSTRAINT CHK_time CHECK (tiempo_espera>=1 AND tiempo_espera<=15),
    CONSTRAINT CHK_powerupprob CHECK (prob_aparicion_mejora>=0 AND prob_aparicion_mejora<=30)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;