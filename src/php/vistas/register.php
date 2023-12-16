
<body>
    <main id="landing-page">
        <div class="div-superior">
            <h1>REGISTRAR USUARIO</h1>
        </div>
        <div class="div-inferior">
            <?php
                //Verificar si hay un parámetro de error en la URL
                if (isset($_GET['error'])) {
                    $error = $_GET['error'];

                    if($error === 'CamposObligatorios'){
                        echo "<p style='color: red;'>Por favor, complete todos los campos obligatorios.</p>";
                    }elseif($error === 'RegistroFallido'){
                        echo "<p style='color: red;'>Error en el registro. Inténtelo de nuevo.</p>";
                    }
                }
            ?>
            <form method="POST" action="controladores/registerctrl.php">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre">
                <br>
                <label for="contraseña">Contraseña:</label>
                <input type="password" id="contraseña" name="contraseña">
                <br>
                <input type="submit" value="REGISTRARSE">
            </form>
            <a href="path/al/index.html">Volver al Index</a>
        </div>
    </main>
