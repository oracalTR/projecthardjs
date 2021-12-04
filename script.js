// Hard JS
let num = 266219;
let res = num.toString();
let comp = 1;
let lang = prompt('Введите язык докумена', 'Необходимо ввести ru или en');
let namePerson = 'Павел';
let weeks = {
    ru: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', ],
    en: [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', ],
};


//Седьмой урок
const app = document.querySelector('.app');
let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
week.forEach((elem, index) => {
    let day = new Date().getDay() - 1;
    console.log(day);
    let days;
    if(index == day) {
        app.insertAdjacentHTML('beforeend', `
            <b>${elem}</b></br>
        `);
    } else if (index == 5 || index == 6){
        app.insertAdjacentHTML('beforeend', `
            <i>${elem}</i></br>
        `);
    } else {
        app.insertAdjacentHTML('beforeend', `
            ${elem}</br>
        `);
    }
});
//Конец седьмой урок

//Пятый урок
let arr = ['12', '24', '42', '60', '48', '55', '44'];

arr.forEach( elem => {
    if(elem[0] == 2 || elem[0] == 4) {
        console.log(elem);
    }
});

num:
for(let i = 2; i <= 100; i++) {
    for(let j = 2; j < i; j++) {
        if(i % j == 0) {
            continue num;
        }
    }
    console.log(`Делители этого числа ${i}: 1 и ${i}`);
}
//Конец пятый урок

//Четвертый урок
function stringWork(text) {
    if(typeof text !== 'string') {
        alert('Здесь должен быть текст');
    } else {
        if(text.trim().length > 30) {
            console.log(text.substr(0, 30) + '...');
        } else {
            console.log(text.trim());
        }
    }
}

stringWork('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium itaque alias facilis deserunt commodi quis cupiditate rerum quibusdam nisi necessitatibus! Nam repellendus ipsum suscipit omnis dicta mollitia beatae aperiam itaque?');
//Конец четвертого урока

lang == 'ru' ? console.log(weeks.ru) : lang == 'en' ? console.log(weeks.en) : console.log('Язык документа не определен');

switch(lang) {
    case 'ru':
        console.log(weeks.ru);
        break;
    case 'en':
        console.log(weeks.en);
        break;
    default:    
        console.log('Язык документа не определен');
        break;
}

namePerson == 'Артём' ? console.log('Директор') : namePerson == 'Александр' ? console.log('Преподаватель') : console.log('Студент');

for (let i = 0; i < res.length; i++) {
    comp *= res[i];
}

console.log(`Результат перемножения чисел в num = ${comp}`);

comp **= 3;

console.log(weeks[lang]);
console.log(`Результат возведения в степень 3 = ${comp}`);
console.log(`Первые две цифры числа comp = ${comp.toString().substr(0, 2)}`);