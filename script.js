const display = document.getElementById("display");

function deleteInput(){
    display.value = "";
    console.log("cleared")
}

function appendToDisplay(input){
    display.value += input;
    console.log("added value to input")
}

function calculate(){
    try {
        display.value = eval(display.value);
        console.log("success")
    } catch (error) {
        display.value = "Error"
        console.log("input error")
    }
}