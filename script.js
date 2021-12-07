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

//Девятый  урок

const app = document.querySelector('.app');
let timeStamp = function() {
    setInterval(() => {
        let date = new Date();
        let dayWeek = date.toLocaleString('default', { weekday: 'long' });
        let day = date.toLocaleString('default', { day: 'numeric' });
        let month = date.toLocaleString('default', { month: 'long' });
        let monthN = date.toLocaleString('default', { month: 'numeric' });
        let year = date.toLocaleString('default', { year: 'numeric' });
        let hour = date.toLocaleString('default', { hour: 'numeric' });
        let min = date.toLocaleString('default', { minute: 'numeric' });
        let sec = date.toLocaleString('default', { second: 'numeric' });
    
        function zeroForNum(elem) {
            return elem < 10 ? '0' + elem : elem;
        }
        function monthDecl(month) {
            if(month.substring(month.length - 1) == 'т') {
                return month + 'а';
            } else if(month.substring(month.length - 1) == 'ь') {
                return month.substr(0, month.length - 1) + 'я';
            } else if(month.substring(month.length - 1 == 'й')) {
                return month.substr(0, month.length - 1) + 'я';
            } else {
                return month + 'а';
            }
        };
        function declOfHourMinSec(num, arr) {  
            num = Math.abs(num) % 100; 
            let n1 = num % 10;
            if (num > 10 && num < 20) { return arr[2]; }
            if (n1 > 1 && n1 < 5) { return arr[1]; }
            if (n1 == 1) { return arr[0]; }
            return arr[2];
        }
    
        let dateNowA = `a) Сегодня ${dayWeek.toUpperCase().substr(0, 1) + dayWeek.substr(1)}, 
        ${day} ${monthDecl(month)} ${year} года, ${hour} ${declOfHourMinSec(hour, ['час', 'часа', 'часов'])} ${min} ${declOfHourMinSec(min, ['минута', 'минуты', 'минут'])} ${sec} ${declOfHourMinSec(sec, ['секунда', 'секунды', 'секунд'])}`;
        let dateNowB = `б) ${zeroForNum(day)}.${zeroForNum(monthN)}.${year} - ${hour}:${zeroForNum(min)}:${zeroForNum(sec)}`;
        app.innerHTML = '';
        app.insertAdjacentHTML('beforeend', `<p>${dateNowA}</p>`);
        app.insertAdjacentHTML('beforeend', `<p>${dateNowB}</p>`);
    }, 1000)
};

timeStamp();


//Конец девятого урока

//Седьмой урок
// const app = document.querySelector('.app');
// let week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

// week.forEach((elem, index) => {
//     let date = new Date();
//     let optionsDate = { weekday: 'short'};
//     let dayName = new Intl.DateTimeFormat('ru-RU', optionsDate).format(date);
//     console.log(dayName);
//     if(elem.toLowerCase() == dayName) {
//         app.insertAdjacentHTML('beforeend', `
//         <b>${elem}</b></br>
//         `);
//     } else if (elem.toLowerCase() == 'сб' || elem.toLowerCase() == 'вс'){
//         app.insertAdjacentHTML('beforeend', `
//             <i>${elem}</i></br>
//         `);
//     } else {
//         app.insertAdjacentHTML('beforeend', `
//             ${elem}</br>
//         `);
//     }
// });
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