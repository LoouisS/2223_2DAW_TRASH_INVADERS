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
                        width: "100px",
                        height: "100px"
                    };
                });
                return imagesData;
            });
    }
}
