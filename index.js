let xlsx = require('xlsx');
fs = require('fs');

// Ler arquivo
let wb = xlsx.readFile('Pasta1.xlsx', {cellData: true });


// Pegar o nome da planilha
console.log(wb.SheetNames);

let ws = wb.Sheets['Planilha1'];

// console.log(ws);
let data = xlsx.utils.sheet_to_json(ws);
// console.log(data);


// Colunas
for(var key in data[0]){
    // Colunas 
    console.log(key);
    console.log("value is: ",Object.keys(data).map(key => data[key])) // Object.values can be used as well in newer versions.
}
