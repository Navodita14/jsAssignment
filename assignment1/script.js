console.log("Ques1");
function ques1() {
    function counter() {
        let a = 0;
        return function increment() {
            return ++a;
        }
    }
    let num = counter();
    console.log(num());
    console.log(num());
    console.log(num());
    console.log(num());
}
ques1();

console.log("Ques2");
function ques2() {
    const multiply = (a, b) => (a * b);
    console.log(multiply(4, 6));

}
ques2();

console.log("Ques3");
function ques3() {
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data Fetched Successfully")
            }, 2000)
        })
    }
    const promise = fetchData();
    console.log(promise);
}
ques3();


console.log("Ques4");
function ques4() {
    let arr = [1, 2, 3, 4, 5]
    let [arr1, arr2, arr3, arr4, arr5] = [arr[0], arr[1], arr[2], arr[3], arr[4]]
    console.log(arr);
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);
    console.log(arr5);
}
ques4();
console.log("Ques5")
function ques5() {
    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }
    class Rectangle extends Shape {
        getArea() {
            return this.width * this.height;
        }
    }
    const rectangle = new Rectangle(10, 5);
    console.log(`Recatngle area is ${rectangle.getArea()}`);

}
ques5();

console.log("Ques6")
function ques6() {
    const uniqueNumbers = new Set([5, 10, 15]);
    const userRoles = new Map();
    userRoles.set(101, "Admin");
    userRoles.set(102, "Developer");
    userRoles.set(103, "HR");
    console.log(uniqueNumbers);
    console.log(userRoles)
}
ques6();

console.log("Ques7")
function ques7() {
    function greet(name) {
        return `Hello, ${name}!`;
    }
    console.log(greet("Navy"));

}
ques7();

console.log("Ques8")
function ques8() {
    console.log("Hiii");
    async function getData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const json = await response.json();
            return json;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    console.log(getData());
}
ques8();

console.log("Ques9")
function ques9() {
    function counterFactory() {
        let count = 0;
        return {
            increment: () => {
                count++;
            },
            getCount: () => count
        };
    }
    const counter2 = counterFactory();
    counter2.increment()
    counter2.increment()
    counter2.increment()
    counter2.increment()
    console.log(counter2.getCount());
}
ques9();

console.log("Ques10")
function ques10() {
    function addNumbers(...arguments) {
        let sum = 0;
        for (const i of arguments) {
            sum += i;
        }
        return sum;
    }
    console.log(addNumbers(2, 3, 4, 5, 6, 7));
}
ques10();