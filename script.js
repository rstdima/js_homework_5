// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
   if(i === 0) {
      console.log(`${i} это ноль`);
   } else if(i % 2 == 0) {
      console.log(`${i} четное число`);
   } else {
      console.log(`${i} не четное число`);
   }
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]

// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let arr = [1, 2, 3, 4, 5, 6, 7];
let removed = arr.splice(3, 2);
console.log(arr);

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let generatedNumbers;
let result;
let sum= 0;

addNumbers ();

function addNumbers () {
   generatedNumbers = [];

   while(generatedNumbers.length < 5) {
      const numbers = Math.floor(Math.random() * 10); // генерируем числа от [1 - 10)
      generatedNumbers.push(numbers);

      console.log(generatedNumbers);
   }
}

for (let i = 0; i < generatedNumbers.length; i++) {
   sum += generatedNumbers[i]; 

   if(generatedNumbers[i] === 3) {
      console.log(generatedNumbers[i]);
   }
}
console.log(`Сумма массива равна ${sum}`)

let minNumbers = Math.min.apply(null, generatedNumbers);
console.log(`Минимальное значение массива ${minNumbers}`);
