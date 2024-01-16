const display = document.getElementById("main")

function addValue(input){
    display.value += input
}

function clr(){
    display.value = "";
}

function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
        setTimeout(() => {
            display.value = "";
        }, 3500)
    }
}