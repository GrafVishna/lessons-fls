
function buttonsLineHover(buttonsWrapper) {
   const buttons = buttonsWrapper.querySelectorAll("button");
   const buttonsLine = document.createElement("span");
   buttonsWrapper.prepend(buttonsLine);
   document.addEventListener("click", buttonClick);
   function buttonClick(event) {
      const targetItem = event.target;
      console.log(targetItem);
      if (targetItem.closest("button")) {
         buttons.forEach(((button, index) => {
            buttonsLine.style.width = `calc(100% / ${index + 1})`;
            if (button == targetItem.closest('button')) {
               button.classList.add("active");
               buttonsLine.classList.add("active");
               buttonsLine.style.transform = `translateX(calc(${index} * 100%))`;
               buttonsLine.style.opacity = "1";
               console.log(index);
            } else {
               button.classList.remove("active")
            }
         }))
      }
   }
}

buttonsLineHover(document.querySelector("[data-buttons-anim]"))
