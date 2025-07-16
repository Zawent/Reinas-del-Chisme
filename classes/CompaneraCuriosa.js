const Chismosa = require("./Chismosa");

class CompaneraCuriosa extends Chismosa {
  recolectarInfo() {
    console.log(`${this.nombre}: Hace preguntas aparentemente profesionales a los compañeros de trabajo`);
  }

  contarChisme() {
    console.log(`${this.nombre}: Comenta el chisme como ejemplo de vida en el trabajo`);
    // Subida lenta de nivel de chisme
    this.setNivelChisme(this.getNivelChisme() + Math.random() * 1.5);
    // Gana reputación
    this.setReputacion(this.getReputacion() + Math.random());
  }
}

module.exports = CompaneraCuriosa;
