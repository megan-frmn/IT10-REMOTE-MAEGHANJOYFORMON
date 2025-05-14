const fontSelector = document.getElementById("font-selector");
fontSelector.addEventListener("change", function(event){
    const selectedFont = event.target.value;
    const textElement = document.getElementById("text");
    textElement.style.fontFamily = selectedFont;
    console.log(selectedFont);
});

