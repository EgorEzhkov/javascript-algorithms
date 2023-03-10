/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

const arr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']

function findVowels(str) {
	let sum = 0
	for (let i = 0; i < str.length; i++) {
		if (arr.includes(str[i].toLowerCase())) {
			sum = sum + 1
		}
	}
	return sum
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3