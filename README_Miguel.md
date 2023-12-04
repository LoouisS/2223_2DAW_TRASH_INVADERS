### Tareas Sprint 3 Parte Cliente


#### Javascript Basico
- [x] Codigo cumple con las reglas de programacion
    - [x] KISS
    - [x] DRY
    - [x] SOLID
        Espero que mi codigo cumpla con los principios anteriormenta mencionados don miguel

#### Programacion Orientada a Objetos
- [x] Controlador mejoras
    - He desarrollado un controlador
- [x] Modelo de las mejoras
    - He desarrollado un modelo para las mejoras
- [x] Vista de las mejoras
    - ./src/js/vistas/* 
        - He desarrollado 5 vistas en total mas el template

#### Documentacion codigo
- [x] Documentacion generada automaticamente

#### Validacion formularios
- [x] Validacion mutliplicador usuario
    - Desde el index html, 
        Iniciar sesion, 
        Menu usuario (botones abajo a la derecha), 
        Mejoras usuario (botones abajo a la izquierda)
        Agregar mejora (boton abajo a la izquierda)
        Campo de multiplicador, solo permite valores entre 1 y 5.
- [x] Validacion cruzada mejoras del usuario
    - Desde el index html
        Iniciar sesion
        Menu usuario (botones abajo a la derecha)
        Mejoras usuario (boton abajo a la izquierda)
        La suma total de los campos no puede exceder el valor del parentesis
- [x] Se valida el valor de los multiplicadores mediante expresiones regulares
- [x] Se validan los campos del registro del usuario
    - Desde el index html
        Clic en registrar usuario
            - Nombre solo puede contener letras
            - Correo debe contener un @ almenos
            - Contraseña al menos 8 caracteres, incluir letras mayúsculas, minúsculas, números y caracteres especiales
            - Telefono 9 digitos en total

#### Eventos
- [x] Se han susado 5 eventos diferente
    - He añadido onclick a botones del menu para la navegacion
    - He añadido blur para la validacion de la regex de los multiplicadores
    - He añadido change para cuando se modifica la opcion del select se modifique la previsualizacion
    - He añadido el mouseover para una animacion del boton de eliminar
    - He añadido el mouseout para una animacion del boton de eliminar

#### Depuracion y pruebas
- [x] Codigo probado por los coworkers

#### Gestion del DOM
- [x] Tres selectores
    - getElementsByClassName
    - getElementByID
    - querySelector
- [x] Generacion de las mejoras del usuario (lista en funcion de los datos en la base de datos)
- [x] Generacion, Eliminacion y Modifiacion del DOM en la lista de los rankings
    - Desde el index html
        Clic en Iniciar sesion
        Menu usuario
        Rankings
        Se muestran las 5 puntuaciones mayores, se pueden eliminar al hacer clic en el boton y se modifica la tabla con los nuevos valores
        

#### AJAX
- [x] GET (Todas vuelven en formato JSON)
    - Listo las mejoras mediante una peticion GET
    - Listo las imagenes de las mejoras mediante una peticion GET
    - Obtengo el valor total que no debe superar el total de las mejoras con GET
    - Obtengo las puntuaciones del ranking con GET

- [x] POST
    - Envio puntuaciones al servidor mediante POST en formato JSON

- [x] DELETE
    - Elimino una puntuacion en concreto mediante delete