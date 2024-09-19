// Program 1
const calculateAverage = (a, b, c) => (a + b + c) / 3;
console.log(calculateAverage(4, 6, 2));

// Program 2
// const multiplicationFunc = (a, b, c) => {
//   if (c === undefined) {
//     c = 4;
//   }
//   return a * b * c;
// };
const multiplicationFunc = (a, b, c = 4) => a * b * c 
console.log(multiplicationFunc(3, 1)); // 12
console.log(multiplicationFunc(3, 10)); // 120


// Program 3
const combineWords = (...strings) => strings.join(" ")
console.log(combineWords("This", "is", "an", "amazing", "day"));
// Output: This is an amazing day


// Program 4
const combineArrays = (arr1, arr2) => [...arr1, ...arr2]
console.log(combineArrays([10, 20, 30], [40, 50, 60]));
// Output: [10, 20, 30, 40, 50, 60]

// Program 5
const concatenateWithSeparator = (separator, ...colors) => colors.join(separator)
console.log(
  concatenateWithSeparator(
    "->",
    "Violet",
    "Indigo",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Red",
  ),
);
// Output: Violet->Indigo->Blue->Green->Yellow->Orange->Red


// Program 6
const product = {
  title: "iPhone",
  price: 5999,
  description: "The iPhone is a smartphone developed by Apple",
};

const {title, price, description} = product
console.log(title)
console.log(price)
console.log(description)

// Program 7
const car1 = { make: "Porsche", model: "911", horsepower: 450 };
const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

const isSportsCar = (obj) => obj.horsepower >= 300 ? true : false

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

// Program 8
const getData = ({name, address: {city: address}}) => {
  console.log(name)
  console.log(address)
}

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};
getData(person);

// program 9
const sumFirstElement = (...numbers) => {
  const[first, last] = [numbers[0], numbers[numbers.length - 1]]
  return first + last
}
console.log(sumFirstElement(1, 2, 3, 5)); // Output: 6

// Program 10
const person1 = { name: "John", age: 25, occupation: "Software Engineer" };
const person2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

const personInfo = (obj) => `${obj.name} is ${obj.age} years old.`

console.log(personInfo(person1)); // Expected output: "John is 25 years old."
console.log(personInfo(person2)); // Expected output: "Jane is 45 years old."


// Program 11
const findPerson = ([...arr], name) => {
  for(let i=0; i< arr.length; i++){
    // console.log(arr[i])
    if(arr[i].name == name){
      return arr[i]
    } 
  }
  return "Not Found"
}

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil",
  ),
);

// Program 12
const pickFirstAndSecond = ([first, second]) => ({first, second})
console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
// Output: {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]));
// Output: {first: 'red', second: 'blue'} 


