--Antonio Manuel Figueroa Pinilla
--Inserción de filas en base de datos Trash Invaders.

--Inserción de usuario "especial" administrador.


$pswrd = password_hash($_post["pw"]);

INSERT INTO usuario(nickname, pswrd)

VALUES('Adm','Entraaqui123'); 

INSERT INTO administrador (idAdmin)
VALUES ('Adm');

--Inserción de parámetros de basura y mejoras predeterminados.
/*Estos solo van a poder ser modificados por el usuario administrador*/
INSERT INTO parametros(velocidad_basura, generacion_basura, tiempo_espera, prob_aparicion_mejora)
VALUES (10,30,15,30);


password_verify($_post["pw"], $fila["pw"]])