'Use strict'

// МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ JS
const homework_1 = () => {
  console.log("МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ JS");
  // Напишите выражение, которое вычисляет сумму чисел 5 и 10.
  console.log("суммa чисел 5 и 10 ", 5 + 10);
  // Используя оператор вычитания, найдите разницу между 20 и 7.
  console.log("разницa между 20 и 7 ", 20 - 7);
  // Какой результат даст выражение 8 * 3?
  console.log("выражение 8 * 3 дает ", 8 * 3);
  // Что вернёт оператор деления при вычислении 15 / 3?
  console.log("выражение 15 / 3 дает ", 15 / 3);
  // Используя оператор остатка от деления, найдите остаток от 17 % 5.
  console.log("остаток от деления 17 / 3 ", 17 % 3);
  // Увеличьте значение переменной x на 1, используя инкремент.
  let x = 8;
  console.log("увелечение", x, "на 1 это ", ++x);
  // Уменьшите значение переменной y на 1, используя декремент.
  let y = 10;
  console.log("уменьшение", y, "на 1 это ", --y);
  // Используйте оператор возведения в степень для вычисления 2 ** 4.
  console.log("2 в степени 4", 2 ** 4);
  // Если z = 10, чему будет равно z += 5?
  let z = 10;
  console.log("Если z = 10, z += 5 будет равно ", z += 5);
  // Если a = 6, чему будет равно a *= 3?
  let a = 6;
  console.log("Если a = 6, a *= 3 будет равно ", a *= 3);
  console.log("  ");
  // ОПЕРАТОРЫ СРАВНЕНИЯ JS
  console.log("ОПЕРАТОРЫ СРАВНЕНИЯ JS");
  // Что вернёт выражение 5 > 3?
  console.log("выражение 5 > 3 вернет ", 5 > 3);
  // Какой результат даст сравнение 7 <= 7?
  console.log("сравнение 7 <= 7 вернет ", 7 <= 7);
  // Верно ли, что 10 == '10'?
  console.log("сравнение 10 == '10' вернет ", 10 == '10');
  // Чем отличается оператор == от ===?
  console.log("оператор == сравнивает приводя типы к одному. оператор === сравнивает без приведения типов (является более точным)");
  // Что вернёт выражение 0 === false?
  console.log("выражение 0 === false вернет ", 0 === false);
  // Какой результат даст сравнение 'apple' > 'banana'?
  console.log("сравнение 'apple' > 'banana' вернет ",'apple' > 'banana');
  // Что вернёт выражение null == undefined?
  console.log("выражение null == undefined вернет ", null == undefined);
  // Верно ли, что NaN == NaN?
  console.log("Верно ли, что NaN == NaN? ", NaN == NaN ? "да" : "нет");
  // Какой результат даст выражение 5 != '5'?
  console.log("выражение 5 != '5' вернет ", 5 != '5');
  // Что вернёт выражение '5' !== 5?
  console.log("выражение '5' !== 5 вернет ", '5' !== 5);

  // Преобразуйте число 10 в строку явно.
  let testNumber = 10;
  console.log(10, 'is a number', String(testNumber), "is a string");
  // Как неявно преобразуется строка '5' при выполнении выражения '5' * 2?
  console.log('because multiply exist only for numbers js try change string to numbers and if it is posible then does it');
  // Что вернёт выражение Number('20')?
  console.log("выражение Number('20') вернет ", Number('20'));
  // Преобразуйте булево значение true в число.
  console.log("true в число вернет ", Number(true));
  // Какой тип данных получится при выполнении выражения 5 + '5'?
  console.log(typeof (5 + '5'));
  // Что произойдёт при явном преобразовании undefined в число?
  console.log(Number(undefined));
  // Как неявно преобразуется null при выполнении выражения null + 5?
  console.log(null + 5);
  // Преобразуйте строку '123abc' в число с помощью parseInt.
  console.log(parseInt('123abc'));
  // Какой результат даст Boolean(0)?
  console.log(Boolean(0))
  // Что вернёт выражение String(false)?
  console.log(String(false));
}
// Functions Cikles Arrays
const homework_2 = () => {
  const search = (arr, num) => {
    console.log(arr.findIndex(item => item === num));
    
    return arr.findIndex(item => item === num);
  }

  const nums = [1, 2, 3, 4, 5];
  search(nums, 3);

  const decode = (wetherCode) => {
    switch (wetherCode) {
      case 'SQ':
        return 'шквал'
      case 'PO':
        return 'пыльный вихрь'
      case 'FC':
        return 'торнадо'
      case 'BR':
        return 'дымка (видимость от 1 до 9 км)'
      case 'HZ':
        return 'мгла (видимость менее 10 км)'
      case 'FU':
        return 'дым (видимость менее 10 км)'
      case 'DS':
        return 'пыльная буря (видимость менее 10 км)'
      case 'SS':
        return 'песчаная буря (видимость менее 10 км)'
      default:
        return 'невозможно определить'
    }
  }

  const wetherDecoder = (wetherCode, decode) => {
    console.log(decode(wetherCode));
    return decode(wetherCode);
  }

  wetherDecoder('FC', decode);

  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }

  for (let i = 15; i <= 96; i += 3) {
    console.log(i);
  }

  for (let i = 96; i >= 15; i -= 3) {
    console.log(i);
  }
  const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];

  const doubleNumbers = numbers.map(item => item * 2);
  console.log(doubleNumbers);
  const positiveHalfNumbers = numbers.filter(item => item > 0).map(item => item / 2);
  console.log(positiveHalfNumbers);

  let originalArray = [1, 2, 3, 4, 5];

  let reverseArray = [...originalArray].reverse();
  console.log(originalArray);
  console.log(reverseArray);
  
  /**
   * ? можно мне получить временное освобождение от домашних работ пока что идут темы очень простые для меня
   * ? а я паралельно пишу веб-приложение на реакте + тайпскрипт + редакс и мне нужно больше на этом сконцентрироваться
   * ? можете просто отмечать что я сдал если это как то фиксируется
  */
}

homework_2();
