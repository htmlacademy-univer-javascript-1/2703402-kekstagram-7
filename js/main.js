// Вспомогательные функции
const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

// Данные для генерации
const DESCRIPTIONS = [
  'Красивый закат на берегу моря',
  'Утренний кофе и свежая газета',
  'Горный пейзаж с облаками',
  'Любимый кот на подоконнике',
  'Прогулка по осеннему парку',
  'Вкусный завтрак в кафе',
  'Ночной город в огнях',
  'Пляж и бирюзовая вода',
  'Лесная тропинка после дождя',
  'Снежные вершины на рассвете',
  'Уютная библиотека',
  'Цветущая сакура',
  'Старинный замок на холме',
  'Яркий городской стрит-арт',
  'Поле подсолнухов',
  'Домашний пирог с ягодами',
  'Велосипедная прогулка',
  'Закат в пустыне',
  'Дождь за окном',
  'Котёнок играет с клубком',
  'Осенний листопад',
  'Морской бриз и парусник',
  'Горячий шоколад зимой',
  'Архитектура старого города',
  'Пикник на природе'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артём', 'Ирина', 'Кекс', 'Рудольф', 'Рокки',
  'Мария', 'Дмитрий', 'Анна', 'Пётр', 'Ольга'
];

// Генерация одного комментария
let commentId = 1;
const createComment = () => {
  // 1 или 2 случайных предложения
  const sentenceCount = getRandomInteger(1, 2);
  const messages = [];
  for (let i = 0; i < sentenceCount; i++) {
    messages.push(getRandomElement(COMMENTS));
  }

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomElement(NAMES)
  };
};

// Генерация одной фотографии
const createPhoto = (index) => {
  const commentCount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 0; i < commentCount; i++) {
    comments.push(createComment());
  }

  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: DESCRIPTIONS[index],
    likes: getRandomInteger(15, 200),
    comments
  };
};

// Массив из 25 фотографий
const photos = [];
for (let i = 0; i < 25; i++) {
  photos.push(createPhoto(i));
}

// Для проверки в консоли
console.log(photos);
