// Hard JS
let num = 266219;
let res = num.toString();
let comp = 1;

//1
let lang = prompt('Введите язык докумена', 'Необходимо ввести ru или en');
let weeks = {
    ru: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', ],
    en: [ 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', ],
};

//a
lang == 'ru' ? console.log(weeks.ru) : lang == 'en' ? console.log(weeks.en) : console.log('Язык документа не определен');

//b
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

//c
console.log(weeks[lang]);

//2
let namePerson = 'Павел';

namePerson == 'Артём' ? console.log('Директор') : namePerson == 'Александр' ? console.log('Преподаватель') : console.log('Студент');

for (let i = 0; i < res.length; i++) {
    comp *= res[i];
}

console.log(`Результат перемножения чисел в num = ${comp}`);

comp **= 3;

console.log(`Результат возведения в степень 3 = ${comp}`);
console.log(`Первые две цифры числа comp = ${comp.toString().substr(0, 2)}`);