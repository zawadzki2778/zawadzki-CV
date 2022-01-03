// for (let i = 1; i <= 10; i++) {
// 	let num = String(i); // преобразуем число в строку

// 	if (num[0] == 1 || num[0] == 2) {
// 		console.log(i);
// 	}
// }
//ереберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

for (let i = 10; i <= 1000; i++) {
	let str = String(i);
	let sum = +str[0] + +str[1];

	if (sum == 5) {
		console.log(i);
	}
}