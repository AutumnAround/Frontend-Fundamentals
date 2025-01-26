/*
Функція getLeaders приймає масив чисел, та повертає масив Лідерів

Пояснення: Число вважається Лідером, якщо воно більше за суму всіх елементів справа від нього.

Примітки:

Вхідний масив містить не менше 3 елементів
Масив вхідних чисел може містити як позитивні, так і негативні числа
Числа можуть повторюватися
Масив який повертається, має містити числа в тому ж порядку, в якому вони зустрічаються у початковому масиві
Відсутність елементів справа від числа розцінюється як 0
*/

function getLeaders(numbers) {
    const leaders = []; 
    let rightSum = 0;
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] > rightSum) {
            leaders.unshift(numbers[i]);
        }
        rightSum += numbers[i]; 
    }

    return leaders; 
}
