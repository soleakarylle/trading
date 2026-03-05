const list = document.getElementById("list");

document.getElementById("totalCollection").innerText =
collection.length + " recordings";

document.getElementById("totalWants").innerText =
wants.length + " wants";

document.getElementById("lastUpdated").innerText =
"Last updated: " + new Date().toLocaleDateString();

function groupByShow(data){

const grouped = {};

data.forEach(r =>{

if(!grouped[r.show]) grouped[r.show]=[];
grouped[r.show].push(r);

});

return grouped;
}

function render(data){

list.innerHTML="";

const grouped = groupByShow(data);

Object.keys(grouped).sort().forEach(show=>{

const block = document.createElement("div");
block.className="showBlock";

const title = document.createElement("div");
title.className="showTitle";

title.innerHTML =
show + "<span class='count'>(" +
grouped[show].length +
")</span>";

block.appendChild(title);

grouped[show].forEach(r=>{

const row=document.createElement("div");
row.className="record";

let icon="🎥";

if(r.format.toLowerCase().includes("audio")) icon="🎧";

let badge="";

if(r.format.toLowerCase().includes("proshot"))
badge="<span class='badge proshot'>PROSHOT</span>";

row.innerHTML=
"<div>"+icon+" "+r.date+" — "+r.venue+" "+badge+"</div>";

block.appendChild(row);

});

list.appendChild(block);

});

}

function loadCollection(){
render(collection);
}

function loadWants(){
render(wants);
}

function importEncora(){

alert(
"To update your site:\n\n1. Export Excel from Encora\n2. Upload it\n3. Regenerate data.js"
);

}

document
.getElementById("search")
.addEventListener("input",e=>{

const term=e.target.value.toLowerCase();

const filtered = collection.filter(r =>
r.show.toLowerCase().includes(term) ||
(r.cast && r.cast.toLowerCase().includes(term))
);

render(filtered);

});
