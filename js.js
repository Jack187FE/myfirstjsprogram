/* 

ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
4. - Создайте метод в объекте который будет считать индекс массы тела и возвращать результат
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.

*/



/* function calcBmi() {
    return Math.round(this.weght / (this.heght ** 2) * 100) / 100 // Метод Math.round округялет число т.е. уберает длиный хвост 

}

let firsUser = {
    name: "Peter",
    weght: 72,
    heght: 1.88,
    calcBmi
}
let secondUser = {
    name: "Denis",
    weght: 82,
    heght: 1.73,
    calcBmi
}

console.log(firsUser.calcBmi()) 
console.log(secondUser.calcBmi())  // проверка что что то работает 

function skinner(firsUser, secondUser) {
    const bmi1 = firsUser.calcBmi();    // выводим bmi в переменые для удобства чтоб не прописывать firsUser.calcBmi как минимум 6 раз) 
    const bmi2 = secondUser.calcBmi();

    if (bmi1 > bmi2) {
        console.log(`BMI ${firsUser.name} is ${bmi1} and he Fatter than ${secondUser.name}`)
    } else if (bmi1 < bmi2) {
        console.log(`BMI ${secondUser.name} is ${bmi2} and he Fatter than ${firsUser.name}`)
    } else {
        console.log("It's a tie! Both have the same BMI.")
    }
}

skinner(firsUser, secondUser); */



// script.js

document.getElementById('calculate').addEventListener('click', function () {
    // Получаем значения из input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Проверяем, что данные введены корректно
    if (!weight || !height || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height!";
        return;
    }

    // Вычисляем BMI
    const bmi = Math.round((weight / (height ** 2)) * 100) / 100;

    // Определяем категорию BMI
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Отображаем результат
    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category}).`;
});
