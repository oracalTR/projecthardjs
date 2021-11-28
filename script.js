// Hard JS
let num = 266219;
let res = num.toString();
let comp = 1;
for (let i = 0; i < res.length; i++) {
    comp *= res[i];
}

console.log(`Результат перемножения чисел в num = ${comp}`);

comp **= 3;

console.log(`Результат возведения в степень 3 = ${comp}`);
console.log(`Первые две цифры числа comp = ${comp.toString().substr(0, 2)}`);