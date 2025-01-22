// ---2 задание---
// function multiply(a: number, b: number): number {
//     return a * b;
// }
// console.log(multiply(3, 8)); // 24
// console.log(multiply(1, 2)); // 2


// ---переменные---
// function repeat(str: string, num: number): string {
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }
// console.log(repeat('sometext', 2)); // 'sometextsometext'
// console.log(repeat('wo', 3)); // 'wowowo'


// ---именованные функции---
// function getHiddenCard(cardNumber: string, starsCount: number = 4): string {
//     const stars = '*'.repeat(starsCount);
//     const visiblePart = cardNumber.slice(-4);
//     return stars + visiblePart;
// }
// console.log(getHiddenCard('1234567812345678', 2)); // '**5678'
// console.log(getHiddenCard('1234567812345678', 3)); // '***5678'
// console.log(getHiddenCard('1234567812345678')); // '****5678'
// console.log(getHiddenCard('2034399002121100', 1)); // '*1100'


// ---анонимные функции---
// const GetNumbers = function (numbers: number[]): number[] {
//     return numbers.filter(num => num % 2 === 0);
// };
// console.log(GetNumbers([1, 2, 3, 4, 5, 6])); 


// ---массивы--анаграммы-
// function filterAnagrams(word: string, wordsList: string[]): string[] {
//     const sortWord = (str: string): string => str.split('').sort().join('');
//     const sortedWord = sortWord(word);
//     return wordsList.filter(candidate => sortWord(candidate) === sortedWord);
// }
// console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // ['aabb', 'bbaa']
// console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
// console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer'])); // ['lacer']


// ---Объектные типы---
// interface Course {
//     name: string;
//     lessons: string[];
//   }
//   function isComplete(course: Course): boolean {
//     return course.lessons.length >= 4;
//   }
//   const course: Course = {
//     name: 'Java',
//     lessons: ['variables', 'functions', 'conditions', 'aaaaaaa'],
//   };
//   console.log(isComplete(course)); 
  


// ---перечисления---
// enum ModalStatus {
//     Opened = 'Opened',
//     Closed = 'Closed',
//   } 
//   interface Modal {
//     text: string;
//     status: ModalStatus;
//   }
//   function buildModal(text: string, status: ModalStatus): Modal {
//     return {
//       text: text,
//       status: status,
//     };
//   }
//   // Пример использования
//   const modal: Modal = buildModal('hexlet forever', ModalStatus.Opened);
//   console.log(modal);
  

// ---псевдонимы типов---
// interface User {
//     name: string;
//     age: number;
//   }
//   function getOlderUser(user1: User, user2: User): User | null {
//     if (user1.age > user2.age) {
//       return user1;
//     } else if (user2.age > user1.age) {
//       return user2;
//     } else {
//       return null;
//     }
//   }
//   const user1: User = { name: 'Alisa', age: 20 };
//   const user2: User = { name: 'Yulia', age: 19 };
//   console.log(getOlderUser(user1, user2)); 

---Тип any---
// function getParams(query: string): { [key: string]: string } {
//     return query
//       .split('&')
//       .reduce((acc: { [key: string]: string }, param: string) => {
//         const [key, value] = param.split('=');
//         acc[key] = value;
//         return acc;
//       }, {});
//   }
//   // Пример использования:
//   console.log(getParams('per=10&page=5')); 
//   console.log(getParams('name=hexlet&count=3&order=asc')); 


// ---Система модулей---
function filter(array: number[], predicate: (n: number) => boolean): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// Пример использования
const numbers: number[] = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3)); 
console.log(filter(numbers, (n) => n % 2 === 0)); 


