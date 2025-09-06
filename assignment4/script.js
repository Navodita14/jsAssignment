//Find the largest and smallest numbers in an array

function ques1() {
  function findMinMax(arr) {
    let min = 100000;
    let max = -100000;
    for (i = 0; i < arr.length; i++) {
      if (i < min) {
        min = arr[i];
        continue;
      }
      if (i > max) {
        max = arr[i];
      }
    }
    return {
      min: min,
      max: max,
    };
  }
  console.log(findMinMax([10, 5, 8, 1, 20]));
}
ques1();
//Sum all elements in an array

function ques2() {
  function sumArray(arr) {
    let sum = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}
ques2();

//Check if a string is a palindrome

function ques3() {
  function isPalindrome(str) {
    let len = str.length / 2;
    for (i = 0; i <= str.length; i++) {
      if (str[i] != str[str.length - i - 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome("madam"));
  console.log(isPalindrome("hello"));
}
ques3();

//Calculate factorial (recursive and iterative)

function ques4() {
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorialRecursive(5));
  console.log(factorialIterative(5));
}
ques4();

//Convert string to title case

function ques5() {
  function toTitleCase(str) {
    let ans = str.charAt(0).toUpperCase();
    for (let i = 1; i < str.length; i++) {
      if (str.charAt(i - 1) === " ") {
        ans += str.charAt(i).toUpperCase();
      } else {
        ans += str.charAt(i);
      }
    }
    return ans;
  }
  console.log(toTitleCase("hello world from javascript"));
}
ques5();

//Sort array of objects by a key

function ques6() {
  function sortByKey(arr, key) {
    return arr.sort((a, b) => {
      if (typeof a[key] === "number") return a[key] - b[key];
      return String(a[key]).localeCompare(String(b[key]));
    });
  }
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  console.log(sortByKey(users, "name"));
  console.log(sortByKey(users, "age"));
}
ques6();

//Get unique elements from an array

function ques7() {
  function getUniqueElements(arr) {
    let result = [];
    arr.forEach((element) => {
      flag = 0;
      result.forEach((e) => {
        if (e === element) {
          flag = 1;
        }
      });
      if (flag == 0) {
        result.push(element);
      } else {
        flag = 0;
      }
    });
    return result;
  }
  console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5]));
}
ques7();

//Get current date in "YYYY-MM-DD" format

function ques8() {
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate < 10 ? "0" + date.getDate : date.getDate;
    const month = date.getMonth < 10 ? "0" + date.getMonth : date.getMonth;
    return `${year}-${month}-${day}`;
  }

  console.log(getCurrentDate());
}
ques8();

//Calculate days between two dates

function ques9() {
  function getDateDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1);
    return diffTime / (1000 * 60 * 60 * 24);
  }
  console.log(getDateDifference("2025-07-01", "2025-07-25"));
}
ques9();

//Combine two arrays

function ques10() {
  function combineArrays(a, b) {
    let arr = [];
    for (i = 0; i < a.length; i++) {
      arr.push(a[i]);
    }
    for (i = 0; i < b.length; i++) {
      arr.push(b[i]);
    }
    return arr;
  }

  const a = [1, 2];
  const b = [3, 4];
  console.log(combineArrays(a, b));
}
ques10();

//Flatten scores from array of user objects

function ques11() {
  function getAllScores(users) {
    let allScore = [];
    for (const user of users) {
      allScore.push(...user.scores);
    }
    return allScore;
  }

  const users = [
    { name: "Alice", scores: [10, 20, 30] },
    { name: "Bob", scores: [40, 50] },
    { name: "Charlie", scores: [60, 70] },
  ];

  console.log(getAllScores(users));
}
ques11();

//Parse JSON string and stringify an object

function ques12() {
  const jsonString = '{"name": "John", "age": 30}';
  const obj = JSON.parse(jsonString);
  console.log(obj);
  const newObj = { city: "New York", country: "USA" };
  const jsonStr = JSON.stringify(newObj);
  console.log(jsonStr);
}
ques12();
