//Find the largest and smallest numbers in an array

function ques1() {
    function findMinMax(arr) {
        return {
            min: Math.min(...arr),
            max: Math.max(...arr)
        };
    }
    console.log(findMinMax([10, 5, 8, 1, 20]));

}
ques1();
//Sum all elements in an array

function ques2() {
    function sumArray(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }
    console.log(sumArray([1, 2, 3, 4, 5]));

}
ques2();


//Check if a string is a palindrome

function ques3() {
    function isPalindrome(str) {
        const cleaned = str.toLowerCase().replace(/\s+/g, '');
        const reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
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
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    console.log(toTitleCase("hello world from javascript"));

}
ques5();

//Sort array of objects by a key

function ques6() {
    function sortByKey(arr, key) {
        return arr.slice().sort((a, b) => a[key] - b[key]);
    }
    const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 }
    ];
    console.log(sortByKey(users, "age"));
}
ques6();


//Get unique elements from an array

function ques7() {
    function getUniqueElements(arr) {
        return [...new Set(arr)];
    }
    console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5]));
}
ques7();


//Get current date in "YYYY-MM-DD" format

function ques8() {
    function getCurrentDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
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
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }
    console.log(getDateDifference("2025-07-01", "2025-07-25"));
}
ques9();


//Combine two arrays

function ques10() {
    function combineArrays(a, b) {
        return [...a, ...b];
    }

    const a = [1, 2];
    const b = [3, 4];
    console.log(combineArrays(a, b));
}
ques10();


//Flatten scores from array of user objects

function ques11() {
    function getAllScores(users) {
        return users.flatMap(user => user.scores);
    }

    const users = [
        { name: "Alice", scores: [10, 20, 30] },
        { name: "Bob", scores: [40, 50] },
        { name: "Charlie", scores: [60, 70] }
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
