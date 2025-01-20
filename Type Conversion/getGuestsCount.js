/*
Готельна справа нелегка штука. 
Особливо в наші часи. 
Grand Mate Hotel оновив свій сайт для бронювання номерів. 
Нарешті крім номера телефону готелю з'явилася і форма для бронювання. 
У формі бронювання потрібно ввести кількість гостей. 
На жаль, програмісти зробили це поле текстовим і тепер готель отримує результати у вигляді "1 гість", "3", "Я і моя мала", "Двійко гостей", "Десь 6".
 Давай покращимо програмне забезпечення готелю і швидко напишемо для них першу версію функції getGuestsCount, 
 яка прийматиме рядок guestsInput і повертатиме кількість гостей, тільки якщо число стоїть на початку рядка. В інших випадках повертай рядок not a number
*/

function getGuestsCount(guestsInput) {
    const guests = parseInt(guestsInput, 10);
    if (!isNaN(guests) && guestsInput.trim().startsWith(guests.toString())) {
        return guests;
    }
    return "not a number";
}