-- Script creacion base de datos
-- Guillermo Sanchez Becerra

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2023 at 10:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trash_invaders`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrador`
--

CREATE TABLE `administrador` (
  `idAdmin` char(3) NOT NULL,
  `contrasenia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `administrador`
--

INSERT INTO `administrador` (`idAdmin`, `contrasenia`) VALUES
('AAA', 'AAA');

-- --------------------------------------------------------

--
-- Table structure for table `imagen`
--

CREATE TABLE `imagen` (
  `idImagen` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `imagen` mediumblob NOT NULL,
  `hash` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mejora`
--

CREATE TABLE `mejora` (
  `idMejora` tinyint(3) UNSIGNED NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `multiplicador` tinyint(3) UNSIGNED DEFAULT NULL,
  `duracion_mejora` tinyint(3) UNSIGNED DEFAULT NULL,
  `porcentaje_aparicion` tinyint(3) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `mejora`
--

INSERT INTO `mejora` (`idMejora`, `descripcion`, `multiplicador`, `duracion_mejora`, `porcentaje_aparicion`) VALUES
(1, 'Multiplicador puntos', 2, 10, 20),
(2, 'Te mueves mas rapido', 3, 10, 20),
(3, 'La basura viene mas despacio', 4, 10, 20);

-- --------------------------------------------------------

--
-- Table structure for table `parametros`
--

CREATE TABLE `parametros` (
  `velocidad_basura` tinyint(3) UNSIGNED NOT NULL,
  `generacion_basura` tinyint(3) UNSIGNED NOT NULL,
  `bolsa_limite_orila` tinyint(3) UNSIGNED NOT NULL,
  `prob_aparicion_mejora` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partida`
--

CREATE TABLE `partida` (
  `idPartida` int(10) UNSIGNED NOT NULL,
  `puntuacion` int(10) UNSIGNED NOT NULL,
  `idUsuario` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `partida`
--

INSERT INTO `partida` (`idPartida`, `puntuacion`, `idUsuario`) VALUES
(2, 100, 1),
(3, 200, 2),
(4, 300, 3),
(5, 400, 4),
(6, 500, 1),
(7, 600, 2),
(8, 700, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rankings`
--

CREATE TABLE `rankings` (
  `idRanking` int(10) UNSIGNED NOT NULL,
  `idUsuario` varchar(255) NOT NULL,
  `puntuacion` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `rankings`
--

INSERT INTO `rankings` (`idRanking`, `idUsuario`, `puntuacion`) VALUES
(1, 'AAA', 100),
(2, 'BBB', 200),
(3, 'CCC', 300),
(4, 'DDD', 400),
(5, 'EEE', 500),
(6, 'FFF', 600),
(7, 'GGG', 700),
(8, 'HHH', 800),
(9, 'III', 900),
(10, 'JJJ', 1000);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` smallint(5) UNSIGNED NOT NULL,
  `nickname` char(3) NOT NULL,
  `contrasenia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nickname`, `contrasenia`) VALUES
(1, 'GSB', 'AAA'),
(2, 'PSB', 'BBB'),
(3, 'CCC', 'CCC'),
(4, 'DDD', 'DDD');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_imagen_mejora`
--

CREATE TABLE `usuario_imagen_mejora` (
  `id_usuario_imagen_mejora` int(10) UNSIGNED NOT NULL,
  `idUsuario` smallint(5) UNSIGNED NOT NULL,
  `idImagen` int(10) UNSIGNED NOT NULL,
  `idMejora` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`idImagen`),
  ADD UNIQUE KEY `hash` (`hash`),
  ADD UNIQUE KEY `unique_hash` (`hash`);

--
-- Indexes for table `mejora`
--
ALTER TABLE `mejora`
  ADD PRIMARY KEY (`idMejora`);

--
-- Indexes for table `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`idPartida`),
  ADD KEY `FK_partida_usuario` (`idUsuario`);

--
-- Indexes for table `rankings`
--
ALTER TABLE `rankings`
  ADD PRIMARY KEY (`idRanking`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`);

--
-- Indexes for table `usuario_imagen_mejora`
--
ALTER TABLE `usuario_imagen_mejora`
  ADD PRIMARY KEY (`id_usuario_imagen_mejora`),
  ADD UNIQUE KEY `unique_usuario_mejora` (`idUsuario`,`idMejora`),
  ADD UNIQUE KEY `unique_usuario_imagen` (`idUsuario`,`idImagen`),
  ADD KEY `FK_usuario_imagen_mejora_imagen` (`idImagen`),
  ADD KEY `FK_usuario_imagen_mejora_mejora` (`idMejora`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imagen`
--
ALTER TABLE `imagen`
  MODIFY `idImagen` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mejora`
--
ALTER TABLE `mejora`
  MODIFY `idMejora` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `partida`
--
ALTER TABLE `partida`
  MODIFY `idPartida` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rankings`
--
ALTER TABLE `rankings`
  MODIFY `idRanking` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuario_imagen_mejora`
--
ALTER TABLE `usuario_imagen_mejora`
  MODIFY `id_usuario_imagen_mejora` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `FK_partida_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Constraints for table `usuario_imagen_mejora`
--
ALTER TABLE `usuario_imagen_mejora`
  ADD CONSTRAINT `FK_usuario_imagen_mejora_imagen` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`),
  ADD CONSTRAINT `FK_usuario_imagen_mejora_mejora` FOREIGN KEY (`idMejora`) REFERENCES `mejora` (`idMejora`),
  ADD CONSTRAINT `FK_usuario_imagen_mejora_usuario` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


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


