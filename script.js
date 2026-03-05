const trades = [
{pair:"BTCUSD",direction:"BUY",profit:120},
{pair:"EURUSD",direction:"SELL",profit:-30},
{pair:"NAS100",direction:"BUY",profit:80},
{pair:"XAUUSD",direction:"BUY",profit:60}
];

const table = document.querySelector("#trades tbody");

trades.forEach(t=>{
let row = `<tr>
<td>${t.pair}</td>
<td>${t.direction}</td>
<td>${t.profit}</td>
</tr>`;
table.innerHTML += row;
});

const ctx = document.getElementById('profitChart');

new Chart(ctx,{
type:'line',
data:{
labels: trades.map(t=>t.pair),
datasets:[{
label:'Profit',
data: trades.map(t=>t.profit)
}]
}
});
