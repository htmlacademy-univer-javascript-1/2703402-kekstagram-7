// Функция 1. Проверка длины строки
function checkLength(string, maxLength) {
  return string.length <= maxLength;
}

// Функция 2. Проверка на палиндром
function isPalindrome(string) {
  // Приводим к нижнему регистру и убираем пробелы
  const normalized = string.toLowerCase().replaceAll(' ', '');
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
}

// Проверки (можно оставить, чтобы убедиться, что работает)
console.log(checkLength('проверяемая строка', 20)); // true
console.log(checkLength('проверяемая строка', 18)); // true
console.log(checkLength('проверяемая строка', 10)); // false

console.log(isPalindrome('топот'));               // true
console.log(isPalindrome('ДовОд'));               // true
console.log(isPalindrome('Кекс'));                // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
