<<<<<<< HEAD
function isMeetingInWorkday(workdayStart, workdayEnd, meetingStart, meetingDuration) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWork = toMinutes(workdayStart);
  const endWork = toMinutes(workdayEnd);
  const startMeeting = toMinutes(meetingStart);
  const endMeeting = startMeeting + meetingDuration;

  return startMeeting >= startWork && endMeeting <= endWork;
}

console.log(isMeetingInWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingInWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingInWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingInWorkday('14:00', '17:30', '08:0', 90));
console.log(isMeetingInWorkday('8:00', '17:30', '08:00', 900));
=======
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
>>>>>>> academy/master
