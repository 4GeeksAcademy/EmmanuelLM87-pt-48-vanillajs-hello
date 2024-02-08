/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombres = ["la", "nuestro", "el"];
  let adjetivos = ["gran", "pequeño", "emocionante", "increible"];
  let nombres = ["pony", "parque", "coche", "código"];
  let tids = [".com", ".org", ".es", ".eu"];

  let domainNames = [];

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let nombre of nombres) {
        for (let tid of tids) {
          domainNames.push(`${pronombre}${adjetivo}${nombre}${tid}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${domainNames
    .map(domainName => `<li>${domainName}</li>`)
    .join(" ")}</ul>`;
};
