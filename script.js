const fontSelector = document.getElementById("font-selector");
fontSelector.addEventListener("change", function(event){
    const selectedFont = event.target.value;
    const textElement = document.getElementById("text");
    textElement.style.fontFamily = selectedFont;
    console.log(selectedFont);
});

const sizeSelector = document.getElementById("size-selector");
sizeSelector.addEventListener("change", function(event){
    const selectedSize = event.target.value;
    const textElement = document.getElementById("text");
    textElement.style.fontSize = selectedSize + "px";
    console.log(selectedSize);
});

const colorSelector = document.getElementById("color-selector");
colorSelector.addEventListener("change", function(event){
    const selectedColor = event.target.value;
    const textElement = document.getElementById("text");
    textElement.style.color = selectedColor;
    console.log(selectedColor);
});