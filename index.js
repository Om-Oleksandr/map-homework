"use strict";
// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна
//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false
//compare('ssaadd', 'asd') ->false
const compareStringsSecondWay = (str1, str2) => {
  const newStr1 = new Map();
  const newStr2 = new Map();
  let testValue;
  for (const char of str1.toLowerCase()) {
    newStr1.set(char, (newStr1.get(char) || 0) + 1);
  }
  for (const char of str2.toLowerCase()) {
    newStr2.set(char, (newStr2.get(char) || 0) + 1);
  }
  if (newStr1.size !== newStr2.size) {
    return false;
  }
  for (const [key, value] of newStr1) {
    if (newStr2.get(key) !== value) {
      return false;
    }
  }
  return true;
};

console.log(compareStringsSecondWay("asd", "Sad"));

// Створити змінні для року народження, імені другої дитини, робочого телефону.
// Бажано одинм рядком, використовуючи деструктуризацію.

const user1 = {
  id: 1,
  privateInfo: {
    fname: "Brad",
    sname: "Pitt",
    bday: {
      day: 18,
      month: 12,
      year: 1963,
    },
    children: ["Helen", "Alex", "Georg", "Anna"],
  },
  contactInfo: {
    phone: {
      work: "123-12-45",
      mobile: "005-002-003",
    },
    adress: {
      town: "ZP",
      street: "12Avenu",
      house: 45,
    },
    mail: "brad@gmail.com",
  },
  profession: "actor",
};
const {
  privateInfo: {
    bday: { year: birthYear },
    children: [, second, third, fourth],
  },
  contactInfo: {
    phone: { work },
  },
} = user1;

console.log(second);
