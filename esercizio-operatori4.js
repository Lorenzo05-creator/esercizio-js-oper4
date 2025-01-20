
//Esercizio Gatti

let totaleGatti = 44;
let gattiInFila = 6;

let fileTotali = Math.round(totaleGatti / gattiInFila);
let gattiFuori = totaleGatti % gattiInFila;
let gattiMancanti = 7 - gattiFuori

console.log(`Ci sono ${fileTotali} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${gattiFuori}`);
