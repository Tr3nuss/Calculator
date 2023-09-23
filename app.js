const display = document.querySelector('.display-board');
const buttons = document.querySelectorAll('.calc-item');

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



    const log = () => {
        
    }

    const pow = () => {
        
    }

    const round = () => {

    } 

    const sqrt = () => {

    }

    const parce2 = () => {

    }

    const sin = () => {

    }
               
    const parce8 = () => {

    }

    const cos = () => {

    }

    const parce16 = () => {

    }

    const tan = () => {

    }
   


    