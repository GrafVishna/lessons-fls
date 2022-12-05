const buttonsWrapper = document.querySelector(".test__buttons");
const buttons = document.querySelectorAll(".test__button");
const buttonsLine = document.createElement("span");
buttonsWrapper.prepend(buttonsLine);
document.addEventListener("click", buttonClick);
function buttonClick(event) {
   const targetItem = event.target;
   console.log(targetItem);
   if (targetItem.closest(".test__button")) {
      buttons.forEach(((button, index) => {
         let buttonActive = event.target;
         buttonsLine.style.width = `calc(100% / ${index + 1})`;
         if (button == buttonActive.closest('.test__button')) {
            button.classList.add("active");
            buttonsLine.classList.add("active");
            buttonsLine.style.transform = `translateX(calc(${index} * 100%))`;
            buttonsLine.style.opacity = "1";
            console.log(index);
         } else button.classList.remove("active");
      }))
   }
}