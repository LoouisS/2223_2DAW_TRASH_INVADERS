/**
 * Clase que proporciona métodos para realizar peticiones REST al servidor.
 */
export class Rest {
  /**
     * Obtiene datos del servidor.
     * @returns {Promise} Una promesa que se resuelve con los datos obtenidos.
     */
  static async obtenerDatos () {
    const url = 'php/php_guille_cliente/listas_mejoras.php'
    return fetch(url)
      .then(response => response.json())
  }

  /**
     * Obtiene imágenes del servidor.
     * @returns {Promise} Una promesa que se resuelve con los datos de las imágenes obtenidas.
     */
  static async obtenerImagenes () {
    const url = 'php/php_guille_cliente/listar_imagenes.php'
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const imagesData = data.map(item => {
          return {
            src: `data:image/png;base64,${item.imagen}`,
            width: '100',
            height: '100',
            nombre: item.nombre
          }
        })
        return imagesData
      })
  }

  /**
     * Obtiene el porcentaje de aparición para un determinado parámetro de juego.
     * @returns {Promise} Una promesa que se resuelve con el porcentaje de aparición.
     */
  static async obtenerPorcentajeAparicion () {
    const url = 'php/php_guille_cliente/parametros_juego.php'
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.prob_aparicion_mejora
      })
  }

  /**
     * Obtiene los rankings del servidor.
     * @returns {Promise} Una promesa que se resuelve con los datos de los rankings obtenidos.
     */
  static async obtenerPuntuaciones () {
    const url = 'php/php_guille_cliente/listar_rankings.php'
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data
      })
  }

  /**
     * Agrega una nueva puntuación a los rankings.
     * @param {string} idUsuario - El ID del usuario.
     * @param {number} puntuacion - La puntuación a agregar.
     * @returns {Promise} Una promesa que se resuelve cuando la puntuación se agrega correctamente.
     */
  static agregarPuntuacion (idUsuario, puntuacion) {
    const url = 'php/php_guille_cliente/insertar_ranking.php'
    const formData = new FormData()
    formData.append('idUsuario', idUsuario)
    formData.append('puntuacion', puntuacion)
    return fetch(url, {
      method: 'POST',
      body: formData
    })
  }

  /**
     * Elimina una puntuación de los rankings.
     * @param {number} idRanking - El ID del ranking a eliminar.
     * @returns {Promise} Una promesa que se resuelve cuando la puntuación se elimina correctamente.
     */
  static async borrarPuntuacion (idRanking) {
    const url = 'php/php_guille_cliente/borrar_puntuacion.php?idRanking=' + idRanking
    return fetch(url, {
      method: 'DELETE'
    })
  }
}
