let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let display = document.getElementById('display');

let string =""; //for result
let displayString="";
let arr =Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerText.trim() == '='){
            try {
                string = eval(string);
                input.value = string;
                display.innerHTML = string;
            } catch {
                input.value = "Error";
                display.innerHTML ="Error";
                string = "";
            }
        }
        else if(e.target.innerText.trim() == 'AC')
        {
            string="";
            displayString = "";
            input.value =string;
            display.innerHTML = string;
        }

        else if(e.target.innerText.trim() == '<-' || e.target.classList.contains('fa-delete-left')){
            string = string.substring(0, string.length-1);
            displayString = displayString.slice(0, -1);
            input.value=string;
            display.innerHTML = displayString;
        }
        else if(e.target.classList.contains('fa-divide')){
            string +='/';
            displayString += '<i class="fa-solid fa-divide"></i>';
            input.value=string;
            display.innerHTML = displayString;
        }
        else if(e.target.classList.contains('fa-xmark')){
            string +='*';
            displayString += '<i class="fa-solid fa-xmark"></i>';
            input.value=string;
            display.innerHTML = displayString;
        }
        else{
            string +=e.target.innerText.trim();
            displayString+= e.target.innerText.trim();
            input.value = string;
            display.innerHTML = displayString;
        }
    });
});