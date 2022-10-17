const Colors=["Red", "Green", "Blue", "#f1f1f1"]
const btn= document.getElementById("btn")
const color= document.querySelector(".color") 

btn.addEventListener("click", function(){
   const randomNumber=getRandomNumber()
   console.log(randomNumber)
   document.body.style.backgroundColor=Colors[randomNumber]
   color.textContent= Colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random()*Colors.length)
}