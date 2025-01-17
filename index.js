// 2 задание
// function multiply(a, b) {
//     return a * b;
//   }
//   console.log(multiply(3, 8));
//   console.log(multiply(1, 2));


// //переменные
// function repeat(str, num) {
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }
// console.log(repeat('sometext', 2)); 
// console.log(repeat('wo', 3));


//именованные функции
// function getHiddenCard(cardNumber, starsCount = 4) {
//     const stars = '*'.repeat(starsCount);
//     const visiblePart = cardNumber.slice(-4);
//     return stars + visiblePart; 
//   }
  
//   console.log(getHiddenCard('1234567812345678', 2));
//   console.log(getHiddenCard('1234567812345678', 3)); 
//   console.log(getHiddenCard('1234567812345678'));
//   console.log(getHiddenCard('2034399002121100', 1));


//анонимные функции
// const GetNumbers = function(numbers) {
//     return numbers.filter(num => num % 2 === 0);
//   };
  
//   console.log(GetNumbers([1, 2, 3, 4, 5, 6])); 


// //массивы
// function filterAnagrams(word, wordsList) {
//   const sortWord = (str) => str.split('').sort().join('');
//   const sortedWord = sortWord(word);
//   return wordsList.filter(candidate => sortWord(candidate) === sortedWord);
// }

// console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// // ['aabb', 'bbaa']

// console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// // ['carer', 'racer']

// console.log(filterAnagrams('laser', ['lazing', 'lazy',  'lacer']));
// // []


// //Объектные типы
// function isComplete(course) {
//   return course.lessons.length >= 4;
// }

// const course = {
//   name: 'Java',
//   lessons: ['variables', 'functions', 'conditions', 'aaaaaaa'],
// };

// console.log(isComplete(course)); 


// //enum
// const ModalStatus = {
//   Opened: 'Opened',
//   Closed: 'Closed'
// };
// function buildModal(text, status) {
//   return {
//       text: text,
//       status: status
//   };
// }
// // пример использования
// const modal = buildModal('hexlet forever', ModalStatus.Opened);
// console.log(modal);


// //псевдонимы типов
// function getOlderUser(user1, user2) {
//   if (user1.age > user2.age) {
//       return user1;
//   } else if (user2.age > user1.age) {
//       return user2;
//   } else {
//       return null;
//   }
// }
// const user1 = { name: 'Petr', age: 8 };
// const user2 = { name: 'Ivan', age: 10 };

// console.log(getOlderUser(user1, user2));
