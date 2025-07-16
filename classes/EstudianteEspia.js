const Chismosa = require("./Chismosa");

class EstudianteEspia extends Chismosa {
  recolectarInfo() {
    console.log(`${this.nombre}: Lee chats ajenos desde el último puesto del salón`);
  }

  contarChisme() {
    console.log(`${this.nombre}: Filtra el chisme por estados en WhatsApp`);
    // Sube rápido nivel de chisme
    this.setNivelChisme(this.getNivelChisme() + Math.random() * 4);
    // Puede perder reputación si es descubierta (30% chance)
    if (Math.random() < 0.3) {
      this.setReputacion(this.getReputacion() - 3);
      console.log(`⚠️ ${this.nombre} fue descubierta y perdió reputación`);
    } else {
      this.setReputacion(this.getReputacion() + 0.2);
    }
  }
}

module.exports = EstudianteEspia;
