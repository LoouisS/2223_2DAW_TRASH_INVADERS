export class Rest {

    static async obtenerDatos() {
        const url = "php/php_guille_cliente/listas_mejoras.php";
        return fetch(url)
            .then(response => response.json());
    }

    static async obtenerImagenes() {
        const url = "php/php_guille_cliente/listar_imagenes.php";
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                const imagesData = data.map(item => {
                    return {
                        src: `data:image/png;base64,${item.imagen}`,
                        width: "100",
                        height: "100",
                        nombre: item.nombre 
                    };
                });
                return imagesData;
            });
    }

    static async obtenerPorcentajeAparicion() {
        const url = "php/php_guille_cliente/parametros_juego.php";
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                return data.prob_aparicion_mejora;
            });
    }
}
