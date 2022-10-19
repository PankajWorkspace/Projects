const btns= document.querySelectorAll(".question-btn")

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // console.log(e.currentTarget.parentElement.parentElement)
        const question= e.currentTarget.parentElement.parentElement;
       question.classList.toggle("show-text")
    // if(question.classList.contains("show-text")){
    //     question.classList.remove("show-text")
    // }
    // else{
    //     question.classList.add("show-text")
    // }
    })
})

// const questions= document.querySelectorAll(".question")

// questions.forEach(function(question){
//     const btn= question.querySelector(".question-btn")
//     // console.log(btn)
//     btn.addEventListener("click", function(){
//         question.classList.toggle("show-text")
//     })
// })