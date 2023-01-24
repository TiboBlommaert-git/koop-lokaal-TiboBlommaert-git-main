"use strict";

const showOpeningsuren = function () {
    const arrOpeningsurenMogelijkheid1 = [
        {
        dag:"maandag",
        open:"gesloten",
        sluit:"gesloten"
        },
        {
        dag:"dinsdag",
        open:"07:00",
        sluit:"18:00"
        },
        {
        dag:"woensdag",
        open:"07:00",
        sluit:"18:00"
        },
        {
        dag:"donderdag",
        open:"07:00",
        sluit:"18:00"
        },
        {
        dag:"vrijdag",
        open:"07:00",
        sluit:"20:00"
        },
        {
        dag:"zaterdag",
        open:"07:00",
        sluit:"17:30"
        },
        {
        dag:"zondag",
        open:"07:00",
        sluit:"12:15"
        },
       ] 
       
    
  const htmlOutput = document.querySelector(".js-openingsuren");
  const htmlOuput2 = document.querySelector(".js-openingsuren__extra");
  let output = "<ul class='openingsuren__list'>";
  let output2 = "<ul class='openingsuren__list--extra>";

  //overlopen van alle uren
  for (const uren of arrOpeningsurenMogelijkheid1) {
    if(uren.open.toLowerCase() == "gesloten"){
      output += `<li>  ${uren.dag}: ${uren.open}  </li>`;  
    }
    else{
      output += `<li>  ${uren.dag}: ${uren.open}u tot ${uren.sluit}u </li>`;  
    }
    
  }
  output += "</ul>"

  //tonen in de browser
  htmlOutput.innerHTML = output;
  htmlOuput2.innerHTML = output;
};

const init = function () {
  console.log("Pagina geladen");
  //start je code hier
  showOpeningsuren();
};

document.addEventListener("DOMContentLoaded", init);