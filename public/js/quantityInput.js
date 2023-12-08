let inputList = document.querySelectorAll(".quantity-input");

inputList.forEach(input => input.addEventListener( "change", () => {
    validarInput(input)
}));

const validarInput = (input) => {
    if (input.value < 0) {
        alert("Error: La cantidad mínima es 0")
        input.value = 0;
    }
}

let buttonList = document.querySelectorAll(".quantity-btn");

buttonList.forEach(btn => btn.addEventListener("click", () => {
    let input = btn.parentElement.parentElement.querySelector(".quantity-input");
    changeInputValue(btn, input);
}));

const changeInputValue = (btn, input) => {
    let btnClasses = Array.from(btn.classList);  
    if (btnClasses.includes("quantity-btn--add"))
        input.value++;
    if (btnClasses.includes("quantity-btn--substract")) {
        if (input.value != 0) 
            input.value--;
    } 
}