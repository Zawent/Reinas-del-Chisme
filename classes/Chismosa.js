class Chismosa {
    #reputacion;
    #nivelChisme;
  
    constructor(nombre, reputacion = 5, nivelChisme = 0) {
      if (new.target === Chismosa) {
        throw new Error("No se puede instanciar Chismosa directamente");
      }
      this.nombre = nombre;
      this.#reputacion = reputacion;
      this.#nivelChisme = nivelChisme;
    }
  
    recolectarInfo() {
      throw new Error("Método abstracto recolectarInfo() no implementado");
    }
  
    contarChisme() {
      throw new Error("Método abstracto contarChisme() no implementado");
    }
  
    getReputacion() {
      return this.#reputacion;
    }
  
    setReputacion(valor) {
      this.#reputacion = Math.min(10, Math.max(0, valor));
    }
  
    getNivelChisme() {
      return this.#nivelChisme;
    }
  
    setNivelChisme(valor) {
      this.#nivelChisme = Math.min(10, Math.max(0, valor));
    }
  }
  
  module.exports = Chismosa;
  