$('.calculator').on('mouseover', function(){
    $('.result').css('background-color', '#142f3c');
});

$('.calculator').on('mouseout', function(){
    $('.result').css('background-color', '');
});

let calc = document.querySelector('.calculator');
let result = document.querySelector('.result');

$r = calc.addEventListener('click', function(event){
   // проверка наличия у элемента класса bt 
    if(!event.target.classList.contains('bt')) return;

    // получение содержимого кнопки
    let val = event.target.innerText;

    switch(val){
        case 'C':
            result.innerText = '';
            break;
        case '=':
            if(result.innerText.search(/[^0-9*/+-.%√<]/mi) != -1) return;
            result.innerText = eval(result.innerText).toFixed(3);
            break;
        case '√':
            result.innerText = Math.sqrt(eval(result.innerText)).toFixed(3);
            break;
        case '%':
            result.innerText = '00';
            break;
        case '<-':
            result.innerText = (result.innerText).substring(0, (result.innerText).length-1);
            break;
        default:
            result.innerText += val;
    }
});