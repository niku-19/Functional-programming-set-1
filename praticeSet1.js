// 1. Write an ES6 function that takes an array of numbers and returns an array with
// each number incremented by 3 using the map method.
// const numbers = [1, 2, 3, 4, 5];

// const incrementNumbers = numbers => numbers.map(eachNumber => eachNumber + 3);

// console.log(incrementNumbers(numbers));
// // Output: [4, 5, 6, 7, 8]

// 2. Write an ES6 function that takes an array of strings and
// returns an array with all the strings capitalised using the map method.
// const myArray = ["apple", "banana", "cherry"];

// const capitalizeArray = (strings) =>
//   strings.map((eachString) => eachString.toUpperCase());

// console.log(capitalizeArray(myArray));
// // Output: ["APPLE", "BANANA", "CHERRY"]

// 3. Write an ES6 function that takes an array of objects
// representing people and returns an array of their ages
//  using the map method.
// const people = [
//   { name: "Ankit", age: 25 },
//   { name: "Vinit", age: 24 },
//   { name: "Shashi", age: 29 },
// ];

// const getAges = (peoples) => peoples.map((eachPeople) => eachPeople.age);

// const ages = getAges(people);
// console.log(ages); // Output: [25, 24, 29];

// 4. Write an ES6 function that takes an array of objects
// representing products and returns an array with the product
// names in all lower case letters using the map method.
// const products = [
//   { name: "Lip Balm", stock: 100 },
//   { name: "PERFUME", stock: 400 },
//   { name: "Socks", stock: 200 },
// ];
// const getProductNamesInLowerCase = (products) =>
//   products.map((eachProduct) => eachProduct.name.toLowerCase());

// console.log(getProductNamesInLowerCase(products));
// // Output: ["lip balm", "perfume", "socks"]

// 5. Write an ES6 function that takes an array of objects
// representing cities and returns an array of their names
// using the map method.
// const cities = [
//   { name: 'New York', population: 8538000 },
//   { name: 'Los Angeles', population: 3976000 },
//   { name: 'Bangalore', population: 13608000 }
// ];

// const getCityNames = cities => cities.map(eachCity => eachCity.name);

// console.log(getCityNames(cities));
// // Output: ["New York", "Los Angeles", "Bangalore"]

// 6. Write an ES6 function that takes an array of strings
// and returns an array with only the strings that have a
// length greater than 5.
// const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
// const filterLongStrings = fruits => fruits.filter(eachFruit => eachFruit.length > 5)
// console.log(filterLongStrings(fruits));
// // Output: ["banana", "watermelon", "pineapple"]

// 7. Write an ES6 function that takes an array of numbers and
// returns an array with only the numbers that are divisible by
// 3 and also by 5.
// const numbers = [1, 2, 30, 4, 15];
// const isDivisibleBy3and5 = (numbers) =>
//   numbers.filter((eachNumber) => eachNumber % 3 === 0 && eachNumber % 5 === 0);
// console.log(isDivisibleBy3and5(numbers));
// // Output: [30, 15]

// 8. Write an ES6 function that takes an array of objects with
// the properties name and age, and returns an array with only
// the objects that have an age greater than 30.
// const people = [
//   { name: 'Rahul', age: 25 },
//   { name: 'Raj', age: 35 },
//   { name: 'Vijay', age: 45 }
// ];

// const filterByAge = peoples => peoples.filter(eachPeople => eachPeople.age > 30)

// console.log(filterByAge(people));
// // Output: [{ name: 'Raj', age: 35 }, { name: 'Vijay', age: 45 }]

// 9. Write an ES6 function that takes an array of objects with
// the properties name and score, and returns an array with only
// the objects that have a score greater than 80.
// const students = [
//   { name: 'Aditya', score: 85 },
//   { name: 'Bob', score: 75 },
//   { name: 'Charlie', score: 90 }
// ];

// const filterByScore = students => students.filter(eachStudent => eachStudent.score > 80);

// console.log(filterByScore(students));
// // Output: [{ name: 'Aditya', score: 85 }, { name: 'Charlie', score: 90 }]

// 10. Write an ES6 function that takes an array of objects with
// the properties name, age and city, and returns an array with
// only the objects that have a city property of "Indore" and age
// greater than 70.
// const people = [
//   { name: "Ridhima", age: 75, city: "Indore" },
//   { name: "Akshay", age: 60, city: "Delhi" },
//   { name: "Udit", age: 80, city: "Indore" },
//   { name: "Venki", age: 80, city: "Bangalore" },
// ];
// const filterByCityAndAge = (peoples) =>
//   peoples.filter(
//     (eachPeople) =>
//       eachPeople.city.toLowerCase() === "indore" && eachPeople.age > 70
//   );
// const filteredPeople = filterByCityAndAge(people);
// console.log(filteredPeople);
// Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]

// 11. Write an ES6 function that takes an array of
// objects containing book information (title, author, genre)
// and returns an array with only the books of "Science Fiction".
// const books = [
//   {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     genre: "Science Fiction",
//   },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
//   { title: "1984", author: "George Orwell", genre: "Science Fiction" },
//   { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" },
// ];
// const filterByGenre = (books, genre) =>
//   books.filter(
//     (eachBook) => eachBook.genre.toLowerCase() === genre.toLowerCase()
//   );
// const filteredBooks = filterByGenre(books, "Science Fiction");
// console.log(filteredBooks);
// Output: [{title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"}, {title: "1984", author: "George Orwell", genre: "Science Fiction"}]

// 12. Write an ES6 function that takes an array of objects 
// containing employee information (name, age, salary) and 
// returns an array with only the employees who earn a salary 
// above 22000 and age is above 25.
// const employees = [
//   {name: "Abhay", age: 25, salary: 20000},
//   {name: "Joice", age: 30, salary: 35000},
//   {name: "Reena", age: 35, salary: 15000},
//   {name: "Jeena", age: 40, salary: 50000}
// ];

// const filterBySalary = (employees,salary,age) => employees.filter(eachEmploye => eachEmploye.salary > salary && eachEmploye.age > age);

// const filteredEmployees = filterBySalary(employees, 22000, 25);
// console.log(filteredEmployees);
// Output: [{name: "Joice", age: 30, salary: 35000}, {name: "Jeena", age: 40, salary: 50000}]