BEGIN;

-- Creación de base de datos Trash Invaders.
CREATE DATABASE IF NOT EXISTS trashinvaders DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;

-- Creación de tablas.
USE trashinvaders;

-- Creacion de la tabla usuario
CREATE TABLE IF NOT EXISTS usuario (
    idUsuario smallint UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nickname char(3) NOT NULL,
    contrasenia varchar(255) NOT NULL -- Esto tiene que estar hasheado
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla partida
CREATE TABLE IF NOT EXISTS partida (
    idPartida int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    puntuacion int UNSIGNED NOT NULL,
    idUsuario smallint UNSIGNED NOT NULL 
) ENGINE = InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla imagenes
CREATE TABLE IF NOT EXISTS imagen (
    idImagen int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    imagen MEDIUMBLOB NOT NULL,
    hash VARCHAR(255) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla mejora
CREATE TABLE IF NOT EXISTS mejora (
    idMejora tinyint UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(120) NOT NULL, -- Descripcion de la mejora que va a estar limitado en cliente
    multiplicador TINYINT UNSIGNED NULL,
    duracion_mejora TINYINT UNSIGNED NULL,
    porcentaje_aparicion TINYINT UNSIGNED NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Creacion de la tabla administrador
CREATE TABLE IF NOT EXISTS administrador (
    idAdmin char(3) NOT NULL,
    contrasenia varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE IF NOT EXISTS parametros (
    velocidad_basura tinyint unsigned NOT NULL,
    generacion_basura tinyint unsigned NOT NULL,
    bolsa_limite_orila tinyint unsigned NOT NULL,
    prob_aparicion_mejora tinyint unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE IF NOT EXISTS usuario_imagen_mejora(
    id_usuario_imagen_mejora int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idUsuario smallint UNSIGNED NOT NULL,
    idImagen int UNSIGNED NOT NULL,
    idMejora tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE rankings (
    idRanking int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idUsuario VARCHAR(255) NOT NULL,
    puntuacion int UNSIGNED NOT NULL
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

INSERT INTO rankings (idUsuario, puntuacion) VALUES ('AAA', 100);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('BBB', 200);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('CCC', 300);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('DDD', 400);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('EEE', 500);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('FFF', 600);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('GGG', 700);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('HHH', 800);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('III', 900);
INSERT INTO rankings (idUsuario, puntuacion) VALUES ('JJJ', 1000);

-- Inserta tres mejoras en la tabla mejoras

INSERT INTO mejora (descripcion, multiplicador, duracion_mejora, porcentaje_aparicion) VALUES ('Multiplicador puntos', 2, 10, 20);
INSERT INTO mejora (descripcion, multiplicador, duracion_mejora, porcentaje_aparicion) VALUES ('Te mueves mas rapido', 3, 10, 20);
INSERT INTO mejora (descripcion, multiplicador, duracion_mejora, porcentaje_aparicion) VALUES ('La basura viene mas despacio', 4, 10, 20);

-- Inserta los datos del admin
INSERT INTO administrador (idAdmin, contrasenia) VALUES ('AAA', 'AAA');

-- Inserta usuarios

INSERT INTO usuario (nickname, contrasenia) VALUES ('AAA', 'AAA');
INSERT INTO usuario (nickname, contrasenia) VALUES ('BBB', 'BBB');
INSERT INTO usuario (nickname, contrasenia) VALUES ('CCC', 'CCC');
INSERT INTO usuario (nickname, contrasenia) VALUES ('DDD', 'DDD');

-- Inserta partidas 

INSERT INTO partida (puntuacion, idUsuario) VALUES (100, 1);
INSERT INTO partida (puntuacion, idUsuario) VALUES (200, 2);
INSERT INTO partida (puntuacion, idUsuario) VALUES (300, 3);
INSERT INTO partida (puntuacion, idUsuario) VALUES (400, 4);
INSERT INTO partida (puntuacion, idUsuario) VALUES (500, 1);
INSERT INTO partida (puntuacion, idUsuario) VALUES (600, 2);
INSERT INTO partida (puntuacion, idUsuario) VALUES (700, 1);


-- Funciones de agregado basicas

SELECT AVG(puntuacion) FROM rankings;
SELECT MAX(puntuacion) FROM rankings;
SELECT MIN(puntuacion) FROM rankings;
SELECT COUNT(puntuacion) FROM rankings;
SELECT SUM(puntuacion) FROM rankings;

-- Puntuacion total de un usuario

SELECT u.nickname AS nombre_usuario, SUM(p.puntuacion) AS puntuacion_total
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
WHERE u.nickname = 'AAA'

-- Cantidad de partidas media de un usuario

SELECT idUsuario, COUNT(*) AS cantidad_partidas
FROM partida
GROUP BY idUsuario;

-- Media de puntuacion de cada usuario

SELECT u.nickname AS nombre_usuario, AVG(p.puntuacion) AS promedio_puntuacion
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
GROUP BY u.nickname;

-- Puntuacion total por usuario

SELECT u.nickname AS nombre_usuario, SUM(p.puntuacion) AS puntuacion_total
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
GROUP BY u.nickname;

-- Partidas totales por usuario

SELECT u.nickname AS nombre_usuario, COUNT(*) AS cantidad_partidas
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
GROUP BY u.nickname
HAVING COUNT(*) >= 2;

-- Lista de usuarios unicos en el ranking

SELECT DISTINCT idUsuario
FROM rankings;

-- Contar usuarios unicos que hay en el ranking

SELECT COUNT(DISTINCT idUsuario) AS cantidad_usuarios_distintos
FROM rankings;

-- Usuario con la mayor puntuacion total

SELECT u.nickname AS nombre_usuario, SUM(p.puntuacion) AS puntuacion_total
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
GROUP BY u.nickname
ORDER BY SUM(p.puntuacion) DESC
LIMIT 1;

-- Usuario con la mayor puntuacion total con group by

SELECT u.nickname AS nombre_usuario, SUM(p.puntuacion) AS puntuacion_total
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
GROUP BY u.nickname
HAVING SUM(p.puntuacion) = (
    SELECT MAX(total_puntuacion)
    FROM (
        SELECT SUM(puntuacion) AS total_puntuacion
        FROM partida
        GROUP BY idUsuario
    ) AS subconsulta
)

-- Usuario con la mayor puntuacion total con subconsulta and IN

SELECT u.nickname AS nombre_usuario, SUM(p.puntuacion) AS puntuacion_total
FROM partida p
JOIN usuario u ON p.idUsuario = u.idUsuario
WHERE u.nickname IN (
    SELECT u.nickname
    FROM partida p
    JOIN usuario u ON p.idUsuario = u.idUsuario
    GROUP BY u.nickname
    HAVING SUM(p.puntuacion) = (
        SELECT MAX(total_puntuacion)
        FROM (
            SELECT SUM(puntuacion) AS total_puntuacion
            FROM partida
            GROUP BY idUsuario
        ) AS subconsulta
    )
)
-- !PENDIENTE:  Hacer consultas con ANY, IN, EXIST, NOT EXIST y ALL


