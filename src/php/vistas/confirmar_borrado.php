<!DOCTYPE html>
<html>
    <head>
        <title>Confirmación de Borrado</title>
        <link rel="stylesheet" href="src/css/new_style.css">
    </head>
    <body class="register-page">
        <main class="login-page">
            <div class="div-superior">
                <h1>Confirmación de Borrado</h1>
            </div>
            <div class="eliminarconfir">
                <img id='ejemploimagen' src='data:image/jpeg;base64,<?php echo $imagen['imagen']; ?>' alt='<?php echo $imagen['nombre']; ?>'>
            </div>
            <h1 class="eliminarconfir">¿Estás seguro de que deseas eliminar esta imagen?</h1>              
            <?php echo "<button><a href='index.php?controlador=Imagenes&action=ejecucionBorrado&idImagen=" . $_GET['idImagen'] . "&borrado=BorradoCorrecto'>Eliminar</a></button>"; ?>               
            <div>
                <button><a href="index.php?controlador=Imagenes&action=mostrarImagen">Cancelar</a></button>
            </div>  
        </main>        
    </body>
</html>
