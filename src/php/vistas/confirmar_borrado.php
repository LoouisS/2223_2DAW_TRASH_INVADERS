<!DOCTYPE html>
<html>
    <head>
        <title>Confirmación de Borrado</title>
        <link rel="stylesheet" href="src/css/new_style.css">
    </head>
    <body id="register-page">
        <main id="login-page">
            <div class="div-superior">
                <h1>Confirmación de Borrado</h1>
            </div>
            <div>
                <img src="src/img/gato.png" alt="Descripción imagen" id="ejemploimagen"/>
            </div>
            <h1 id="eliminarconfir">¿Estás seguro de que deseas eliminar esta imagen?</h1>              
            <?php echo "<button><a href='index.php?controlador=Imagenes&action=ejecucionBorrado&idImagen=" . $_GET['idImagen'] . "'>Eliminar</a></button>"; ?>               
            <div>
                <button><a href="index.php?controlador=Imagenes&action=mostrarImagen">Cancelar</a></button>
            </div>  
        </main>        
    </body>
</html>
