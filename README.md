# trash-invaders

## Modificaciones estructura MVC - Imagenes

### Archivos sobre los que se ha trabajado

Controlador: 
    src/php/controladores/imagenes.php
Modelo: 
    src/php/modelos/modelo_imagenes.php
Vistas: 
    src/php/vistas/vista_imagenes.php
    src/php/vistas/confirmar_borrado.php
    src/php/vistas/confirmacion_subida.php
    src/php/vistas/borrado_exitoso.php

Cambios realizados al proyecto 

- Se ha documentado todas las clases involucradas con mi tarea

Cambios realizados sobre el controlador

- Se han incluido todas las comprobaciones en los metodos correspondientes
- Se ha modificado la forma de gestionar los archivos no permitidos, eliminandolos de la estructura de datos antes de ser enviadas al modelo. 
    No se notificara al usuario de los archivos que no se subiran. Estos simplementes seran ignorados a la hora de lanzar el query a la base de datos
- Se han modificado las comprobaciones realizadas con las extensiones permitidas, incluyendo GIFs y archivos WEBP
- Se ha incluido la validacion del tamaño de 

Cambios realizados sobre el modelo

- Se han eliminado todas las comprobaciones sobre los modelos
- Las consultas se encontraban sanitizadas, asi que ese aspecto no ha sido modificado

Cambios realizados a las vistas

- Se han eliminado las cabeceras de todas las vistas, de forma que el html completo es construido desde el index.
- El HTML del index es construido mediante los templates encontrados en src/php/vistas/templates/