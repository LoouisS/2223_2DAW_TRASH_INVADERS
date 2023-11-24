
<!DOCTYPE html>
<html>
<head>
    <title>Confirmación de Borrado</title>
</head>
<body>
    <h1>Confirmación de Borrado</h1>
    <p>¿Estás seguro de que deseas eliminar esta imagen?</p>


    <img src='data:image/jpeg;base64,<?php echo $imagen['imagen']; ?>' alt='<?php echo $imagen['nombre']; ?>'>
    <?php echo "<a href='index.php?controlador=Imagenes&action=ejecucionBorrado&idImagen=" . $_GET['idImagen'] . "'>Eliminar</a>"; ?>
    <a href="index.php?controlador=Imagenes&action=mostrarImagen">Cancelar</a>
</body>
</html>
