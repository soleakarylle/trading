const trader = "vndyne";

const proxy = "https://api.allorigins.win/raw?url=";
const encoraURL = `https://encora.it/traders/${trader}`;

async function loadTrader() {

try {

const response = await fetch(proxy + encodeURIComponent(encoraURL));
const html = await response.text();

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");

let rows = doc.querySelectorAll("table tbody tr");

const table = document.querySelector("#trades tbody");
table.innerHTML = "";

let profits = [];
let labels = [];

rows.forEach(row => {

let cols = row.querySelectorAll("td");

if(cols.length > 2){

let pair = cols[0].innerText;
let direction = cols[1].innerText;
let profit = cols[2].innerText;

table.innerHTML += `
<tr>
<td>${pair}</td>
<td>${direction}</td>
<td>${profit}</td>
</tr>
`;

profits.push(parseFloat(profit));
labels.push(pair);

}

});

createChart(labels, profits);

}

catch(err){

console.error(err);

}

}

function createChart(labels,data){

const ctx = document.getElementById("profitChart");

new Chart(ctx,{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Profit",
data:data
}]
}
});

}

loadTrader();

setInterval(loadTrader,300000);
