import { getRandomInteger, getRandomElement } from './utils.js';
import { DESCRIPTIONS, COMMENTS, NAMES } from './data.js';

let commentId = 1;

const createComment = () => {
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

export const createPhoto = (index) => {
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
