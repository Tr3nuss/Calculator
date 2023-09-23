//variables
const display = document.querySelector('.display-board');
const buttons = document.querySelectorAll('.calc-item');
const mathButtons = document.querySelectorAll('.calc-math-item');


//setting up button events

    buttons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let itemSymbol = e.target.textContent;


            if(itemSymbol !== 'AC' && itemSymbol !== 'C' && itemSymbol !== '=') {
                display.value = display.value + itemSymbol;
            }

            if(itemSymbol == 'AC') {
                display.value = '';
            }

            if(itemSymbol == 'C') {
                display.value = display.value.slice(0, -1);
            }

            if(itemSymbol == '=') {
                display.value = eval(display.value);
            }

        });
    });







    mathButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            let itemSymbol = e.target.textContent;

            //calling functions 

            if(itemSymbol == 'log') {
                log();
            }

            if(itemSymbol == 'x²') {
                pow();
            }

            if(itemSymbol == 'rnd') {
                round();
            }

            if(itemSymbol == '√') {
                sqrt();
            }

            if(itemSymbol == 'n2') {
                parce2();
            }

            if(itemSymbol == 'sin') {
                sin();
            }

            if(itemSymbol == 'n8') {
                parce8();
            }

            if(itemSymbol == 'cos') {
                cos();
            }

            if(itemSymbol == 'n16') {
                parce16();
            }

            if(itemSymbol == 'tan') {
                tan();
            }

            

        });
    });

    //writing functions

    const log = () => {
        display.value = Math.log(display.value);
    }

    const pow = () => {
        display.value = Math.pow(display.value, 2);
    }

    const round = () => {
        display.value = Math.round(display.value);
    } 

    const sqrt = () => {
        display.value = Math.sqrt(display.value, 2);
    }

    const parce2 = () => {
        display.value = display.value.toString(2);
    }

    const sin = () => {
        display.value = Math.sin(display.value);
    }
               
    const parce8 = () => {
        display.value = display.value.toString(8);
    }

    const cos = () => {
        display.value = Math.cos(display.value);
    }

    const parce16 = () => {
        display.value = display.value.toString(16);
    }

    const tan = () => {
        display.value = Math.tan(display.value);
    }
   