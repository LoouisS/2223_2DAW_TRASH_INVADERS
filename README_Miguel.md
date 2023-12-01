### Tareas Sprint 3 Parte Cliente

#### Javascript Basico

- [ ] Codigo cumple con las reglas de programacion
    - [ ] KISS
        - Hombre, espero estar desarrollando el codigo lo mas simple posible, o al menos eso me parece a mi jaja.
    - [ ] DRY
    - [ ] SOLID

#### Programacion Orientada a Objetos
- [x] Controlador mejoras
    - He desarrollado un controlador
- [x] Modelo de las mejoras
    - He desarrollado un modelo para las mejoras
- [x] Vista de las mejoras
    - ./src/js/vistas/* 
        - He desarrollado 5 vistas en total mas el template

#### Documentacion codigo
- [ ] Documentacion generada automaticamente

#### Validacion formularios

- [ ] Validacion mutliplicador usuario
    - Desde el index html, 
        Iniciar sesion, 
        Menu usuario (botones abajo a la derecha), 
        Mejoras usuario (botones abajo a la izquierda)
        Agregar mejora (boton abajo a la izquierda)
        Campo de multiplicador, solo permite valores entre 1 y 5.
- [ ] Validacion cruzada mejoras del usuario
- [ ] Se valida el valor de los multiplicadores mediante expresiones regulares

#### Eventos
- [x] Se han usado 5 eventos diferentes
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

#### AJAX
- [x] Enviar puntuaciones al servidor mediante JSON
- [x] Traer datos relacionados con el usuario mediante peticiones GET
    - ./src/js/services/rest 
        Metodo: static async obtenerDatos()
        Lista las mejoras que hay en la base de datos pertenecientes a un usuario concreto

- [x] Borrar asociaciones de mejoras mediante peticiones DELETE
- [x] POST Pendiente