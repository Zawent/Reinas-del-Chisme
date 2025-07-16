const chalk = require('chalk').default;

const TiaVecina = require("./classes/TiaVecina");
const CompaneraCuriosa = require("./classes/CompaneraCuriosa");
const EstudianteEspia = require("./classes/EstudianteEspia");

const chismosas = [
  new TiaVecina("Doña Delia"),
  new CompaneraCuriosa("Karina"),
  new EstudianteEspia("Luisa")
];

for (let ronda = 1; ronda <= 2; ronda++) {
  console.log(chalk.blueBright(`\n--- Ronda ${ronda} ---\n`));
  chismosas.forEach(c => {
    c.recolectarInfo();
    c.contarChisme();
  });
}


console.log(chalk.greenBright("\n--- Estadísticas finales ---"));
chismosas.forEach(c => {
  const nivel = c.getNivelChisme();
  const reputacion = c.getReputacion();

  let nivelColor = chalk.white;
  if (nivel >= 7) nivelColor = chalk.magenta;
  else if (nivel >= 4) nivelColor = chalk.cyan;

  let reputacionColor = chalk.white;
  if (reputacion >= 7) reputacionColor = chalk.keyword("orange");
  else if (reputacion <= 3) reputacionColor = chalk.black.bgRed;

  console.log(
    `${c.nombre}: Nivel de chisme: ${nivelColor(nivel.toFixed(2))} | Reputación: ${reputacionColor(reputacion.toFixed(2))}`
  );
});

// Encontrar el chisme más viral
const maxViral = chismosas.reduce((prev, curr) => (curr.getNivelChisme() > prev.getNivelChisme() ? curr : prev));
console.log(chalk.magentaBright(`\n🟣 El chisme más viral es de ${maxViral.nombre} con nivel ${maxViral.getNivelChisme().toFixed(2)}\n`));
