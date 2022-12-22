/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

// Протестируйте решение, вызывая функцию с разными аргументами:


function capitalize(str) {
	if (typeof str == 'string') {
		let res=[];
		str.split(' ').forEach(function(word){
			res.push(word.slice(0, 1).toUpperCase() + word.slice(1));
		})
		return res.join(' ');
	} else {
		return "Вы ввели нестрочный тип данных"
	}
}

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"