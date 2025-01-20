/*
На районній олімпіаді з інформатики, в розпал подій трапився казус. Сервер для визначення переможця серед двох фіналістів Максима і Романа зламався.

Він мав повертати кількість задач яку розв'язав Максим та Роман у нашу функцію, яка вміє працювати тільки з числами. 
Та щось пішло не так, і сервер почав повертати як рядки так і числа. У результаті вхідні дані могли виглядати непередбачувано.

Олімпіада на межі зриву. 
Давай швидко виправимо ситуацію і допоможемо організаторам новою функцією getWinner, яка першим параметром приймає кількість задач, які розв'язав Максим maxSolved, а другою — кількість, яку розв'язав Роман romanSolved. Вхідні параметри можуть бути як рядками, так і числами.

Результатом функції буде рядок:

Max is the winner!!! - якщо Максим розв'язав більшу кількість задач;
Roman is the winner!!! - якщо Роман розв'язав більшу кількість задач;
Roman and Maxim are the winners!!! - якщо хлопці розв'язали однакову кількість задач.
*/

function getWinner(maxSolved, romanSolved) {
    const max = Number(maxSolved);
    const roman = Number(romanSolved);
    if (isNaN(max) || isNaN(roman)) {
        return "Invalid input!";
    }
    if (max > roman) {
        return "Max is the winner!!!";
    } else if (max < roman) {
        return "Roman is the winner!!!";
    } else {
        return "Roman and Maxim are the winners!!!";
    }
}
