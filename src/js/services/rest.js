export class Rest {

    static peticionGET(contenedor) {
        const url = "php/php_guille_cliente/listas_mejoras.php";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            let main = contenedor.querySelector("main");
            // Add a table to the container
            let tabla = document.createElement("table");
            main.insertBefore(tabla, main.children[1]); 

            // Create table header
            let headerRow = document.createElement("tr");
            tabla.appendChild(headerRow);

            let imagenHeader = document.createElement("th");
            headerRow.appendChild(imagenHeader);
            imagenHeader.innerHTML = "Imagen";

            let descripcionHeader = document.createElement("th");
            headerRow.appendChild(descripcionHeader);
            descripcionHeader.innerHTML = "Descripción";

            let multiplicadorHeader = document.createElement("th");
            headerRow.appendChild(multiplicadorHeader);
            multiplicadorHeader.innerHTML = "Multiplicador";

            let duracionMejoraHeader = document.createElement("th");
            headerRow.appendChild(duracionMejoraHeader);
            duracionMejoraHeader.innerHTML = "Duración Mejora";

            data.forEach(item => {
                let fila = document.createElement("tr");
                tabla.appendChild(fila);

                let imagenCell = document.createElement("td");
                fila.appendChild(imagenCell);
                // FIXME This has to be fixed because no img is associated with the mejora
                let img = document.createElement("img");
            
                img.src = `data:image/png;base64,${item.imagen}`;
                img.style.width = "100px";
                img.style.height = "100px";
                imagenCell.appendChild(img);

                let descripcionCell = document.createElement("td");
                fila.appendChild(descripcionCell);
                descripcionCell.innerHTML = `${item.descripcion}`;

                let multiplicadorCell = document.createElement("td");
                fila.appendChild(multiplicadorCell);
                multiplicadorCell.innerHTML = item.multiplicador;

                let duracionMejoraCell = document.createElement("td");
                fila.appendChild(duracionMejoraCell);
                duracionMejoraCell.innerHTML = item.duracionMejora;
            });
        });
    }

    static peticionGET2(contenedor) {
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