const Chismosa = require("./Chismosa");

class TiaVecina extends Chismosa {
  recolectarInfo() {
    console.log(`${this.nombre}: Aprovecha la reunión del barrio para escuchar discretamente`);
    // Aquí puedes ajustar algo si quieres
  }

  contarChisme() {
    console.log(`${this.nombre}: Difunde el chisme mientras ofrece café`);
    // Sube mucho el nivel del chisme
    this.setNivelChisme(this.getNivelChisme() + Math.random() * 3 + 2); // +2 a +5
    // Puede afectar reputación si exagera (probabilidad)
    if (Math.random() < 0.3) {
      this.setReputacion(this.getReputacion() - (Math.random() * 2));
      console.log(`⚠️ ${this.nombre} exageró y bajó su reputación`);
    } else {
      this.setReputacion(this.getReputacion() + 0.5);
    }
  }
}

module.exports = TiaVecina;
