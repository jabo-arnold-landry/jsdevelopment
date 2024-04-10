let all=document.querySelector(".side-bar"),
     select=all.querySelectorAll(".select-btn"),
    pragraph=all.querySelector(".hi"),
    lits=all.querySelector(".lits"),
    sides=all.querySelector(".side-bar")
 jabo=document.getElementById("hello");
select.forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelector(".hide")?.classList.toggle("hide")
  let toggle=btn.nextElementSibling
  toggle.classList.toggle("hide")
}))

let templer=document.getElementById("kigali")
let labels =document.querySelectorAll("label")
templer.addEventListener("click",()=>{

 let next=templer.nextElementSibling
 next.classList.toggle("action")
 display()

})
function display(){
  labels.forEach(label=>{
  label.addEventListener("click",(e)=>{
    templer.innerHTML=e.target.textContent
    
  })
})
}

let modal=document.querySelector(".modal")
let open=document.querySelectorAll("#labels")
let close=document.getElementById("close")
let overlay=document.getElementById("overlay")
open.forEach(one=>{
  one.addEventListener("click",()=>{
    modal.classList.add("play")
    overlay.classList.add("display")
  })
})


close.addEventListener("click",()=>{
  modal.classList.remove("play")
  overlay.classList.remove("dispaly")
})


overlay.addEventListener("click",()=>{
  overlay.classList.remove("display")
  modal.classList.remove("play")
})

let selected=document.getElementById("side-kick")
selected.addEventListener("click",()=>{
  all.classList.toggle("side")
})

