<body id="register-page">
    <main id="login-page">
        <div class="div-superior">
            <h1>Confirmación de Borrado</h1>
        </div>
        <div class="eliminarconfir">
            <img id='ejemploimagen' src='data:image/jpeg;base64,<?php echo $datos['datos']['imagen']; ?>' alt='<?php echo $datos['datos']['nombre']; ?>'>
        </div>
        <h1 class="eliminarconfir">¿Estás seguro de que deseas eliminar esta imagen?</h1>              
        <?php echo "<button><a href='index.php?controlador=Imagenes&action=ejecucionBorrado&idImagen=" . $_GET['idImagen'] . "&borrado=BorradoCorrecto'>Eliminar</a></button>"; ?>               
        <div>
            <button><a href="index.php?controlador=Imagenes&action=mostrarImagen">Cancelar</a></button>
        </div>  
    </main>        
