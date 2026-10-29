const introPage = document.querySelector("#intro-page");
const calmPage = document.querySelector("#second-page");
const calmButton = document.querySelector("#calm");
const happyPage = document.querySelector("#third-page");
const happyButton = document.querySelector("#happy");
const focusedPage = document.querySelector("#fourth-page");
const focusedButton = document.querySelector("#focused");
const buttons = document.querySelectorAll(".mood-button");
const backButtons = document.querySelectorAll(".back-button")

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.id === "calm") {
      introPage.classList.remove("active");
      calmPage.classList.add("active");
      happyPage.classList.remove("active");
      focusedPage.classList.remove("active");
    } else if (button.id === "happy") {
      introPage.classList.remove("active");
      calmPage.classList.remove("active");
      focusedPage.classList.remove("active");
      happyPage.classList.add("active");
    } else if (button.id === "focused") {
      introPage.classList.remove("active");
      calmPage.classList.remove("active");
      happyPage.classList.remove("active");
      focusedPage.classList.add("active");
    } else {
      introPage.classList.add("active");
      calmPage.classList.remove("active");
      happyPage.classList.remove("active");
      focusedPage.classList.remove("active");
    }
  });
});

backButtons.forEach(function(button){
    button.addEventListener("click", function(){
        if(button.id === "calm-button"){
            calmPage.classList.remove("active");
            introPage.classList.add("active");
            
        } else if(button.id === "happy-button"){
            happyPage.classList.remove("active");
            introPage.classList.add("active");

        } else if(button.id === "focused-button"){
            focusedPage.classList.remove("active");
            introPage.classList.add("active");
        } 
    })
})


