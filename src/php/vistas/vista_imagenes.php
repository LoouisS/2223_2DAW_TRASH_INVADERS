<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../src/css/new_style.css">
        <title>Banco de Imagenes</title>
    </head>
    <body>
        <?php
            print_r($imagenes);
        ?>
        <main id="register-page">
            <div id="div-superior">
                <label><h1>Banco de Imagenes</h1></label>
            </div>
                <div id="tmejoras">
                    <table border="1px">
                        <tr>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                        </tr>
                        <tr>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                        </tr>
                        <tr>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                        </tr>
                        <tr>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                        </tr>
                        <tr>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                        </tr>
                        <tr>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                        </tr>
                        <tr>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                            <td><img src="../src/img/logo.jpg" alt="Descripción imagen"></td>
                            <td><img src="../src/img/gato.png" alt="Descripción imagen"></td>
                        </tr>
                        <tr>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                            <td>logo.png</td>
                            <td>gato.jpg</td>
                        </tr>
                    </table>
                </div>        
            <button id="volvermenu"><a href="menup.html">MENU</a></button>
            <form method="POST" enctype="multipart/form-data" id="formsubir">
                <input type="file" name="imagen" accept=".png,.jpg,.jpeg," multiple><br/>
                <input type="submit" value="SUBIR">
                <input type="submit" value="BORRAR">
            </form>   
        </main>
    </body>
</html>