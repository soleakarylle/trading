function renderList(list, element){

const container = document.getElementById(element);

if(!container) return;

list.forEach(item => {

let div = document.createElement("div");
div.className = "item";
div.innerText = item;

container.appendChild(div);

});

}

renderList(collection,"collectionList");
renderList(wants,"wantsList");

const search = document.getElementById("search");

if(search){

search.addEventListener("keyup", function(){

const term = search.value.toLowerCase();
const items = document.querySelectorAll(".item");

items.forEach(i=>{

i.style.display = i.innerText.toLowerCase().includes(term)
? "block" : "none";

});

});

}
