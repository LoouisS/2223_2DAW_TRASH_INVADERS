/**
 * Clase que representa un modelo básico con funcionalidades de almacenamiento.
 * @class
 */
export class Modelo {
  /**
     * Crea una instancia de la clase Modelo.
     * @constructor
     */
  constructor () {
    /**
         * Un mapa para almacenar pares clave-valor.
         * @type {Map}
         * @private
         */
    this.mapa = new Map()
  }

  /**
     * Guarda un valor asociado a una clave en el mapa.
     * @param {string} clave - La clave para asociar al valor.
     * @param {*} valor - El valor a guardar.
     * @returns {void}
     */
  guardar (clave, valor) {
    this.mapa.set(clave, valor)
  }

  /**
     * Obtiene el valor asociado a una clave del mapa.
     * @param {string} clave - La clave para buscar el valor.
     * @returns {*} El valor asociado a la clave, o undefined si no se encuentra.
     */
  ver (clave) {
    return this.mapa.get(clave)
  }
}
