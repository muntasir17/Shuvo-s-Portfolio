let bars = document.querySelector(".fa-bars");
let list = document.querySelector(".list");
liClick();
function liClick(){
    bars.addEventListener("click", () => {
        list.classList.toggle("translate-y-[-102%]")
    });
    list.addEventListener("click",()=>{
        list.classList.toggle("translate-y-[-102%]")
    });
}
let container = document.querySelector(".container");
let carrer = ["Web Developer","Freelancer","App Developer","Software Developer", "IT Consultant"];
let carrerIndex = 0;
let CharacterIndex = 0;
updateProfession();
function updateProfession(){
CharacterIndex++;
container.innerHTML = `<h1>I Am a ${carrer[carrerIndex].slice(0,CharacterIndex)}</h1>`
if(CharacterIndex === carrer[carrerIndex].length){
    carrerIndex++;
    CharacterIndex = 0;
}
if(carrerIndex === carrer.length){
    CharacterIndex++;
    carrerIndex = 0;
}
setTimeout(() => {
    updateProfession();
}, 200);



}


















