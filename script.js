let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenplay = ' ';
for(elements of buttons){
    elements.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log("button text is ",buttontext);
        if (buttontext =='x'){
            buttontext = '*';
            screenplay += buttontext;
            screen.value = screenplay;
        }
        else if (buttontext =='÷'){
            buttontext = '/';
            screenplay += buttontext;
            screen.value = screenplay;
        }
        else if(buttontext =='AC'){
            screenplay = '';
            screen.value = screenplay;
        }
        else if(buttontext == '='){
            screen.value = eval(screenplay);

        }
        else{
            screenplay += buttontext;
            screen.value = screenplay
        }


    })
}