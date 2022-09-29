import { data } from "./data.js"

const main = document.querySelector("main")
const buttons = document.querySelectorAll("button")



function createElements(data){
    let elements = `<div class="card">
    <img class="image" src="${data.img}" alt="food-image">
    <div class="description">
        <div class="title">
            <h3>${data.title[0].toUpperCase()+data.title.slice(1)}</h3>
            <h3>${data.price}</h3>
        </div>
        <p class="dots"></p>
        <p>${data.desc}</p>
</div>`
    main.innerHTML += elements
}
function renderData(data){
    data.map( el =>{
        createElements(el)
    })
}
renderData(data)


buttons.forEach( button =>{
    button.addEventListener("click", ()=>{
        main.innerHTML = ""
        if(button.classList.contains("btn-all")){
            renderData(data) 
        }if(button.classList.contains("btn-breakfast")){
            breakfastData(data) 
        }if(button.classList.contains("btn-lunch")){
            lunchData(data) 
        }if(button.classList.contains("btn-shakes")){
            shakesData(data) 
        }if(button.classList.contains("btn-dinner")){
            dinnerData(data) 
        }
        
    })
})

function breakfastData(data){
    data.filter( el =>{
        if(el.category === "breakfast" ) return createElements(el)
    })

}
function lunchData(data){
    data.filter( el =>{
        if(el.category === "lunch") return createElements(el)
    })
}
function shakesData(data){
    data.filter( el =>{
        if(el.category === "shakes") return createElements(el)
    })
}
function dinnerData(data){
    data.filter( el =>{
        if(el.category === "dinner") return createElements(el)
    })
}


