// var is obsolet, let, const

/* const age = 30;
 * age = 31; */

// console.log(age);

/* let score;
 * score = 10; */
/* const score = 10;
 * console.log(score); */

// Datatypes String, Number, null, undefined, Symbol

/* const name = 'Pedro';
 * const age = 31;
 * const rating = 4.5;
 * const isCool = true;
 * const x = null;
 * const y = undefined;
 * let z; // is the same undefined
 * console.log(typeof y); */

/* const name = 'Pedro';
 * const age = 31; */

// concatenacion
// console.log('Mi nombre es '+ name +' y tengo '+ age + ' años');

// Template String
/* const hello = `Mi nombre es ${name} y tengo ${age} años`;
 * console.log(hello); */

/* const s = 'Hola Mundo';
 * console.log(s.toUpperCase());
 * console.log(s.substring(0,5).toLocaleUpperCase()); */

/* const s = 'techology, computers, it, code';
 * console.log(s.split(',')); */

/* Arrays - variables con multiples valores */

/* const numbers = new Array(1, 2,3,4,5);
 * console.log(numbers); */

/* const fruits = ['apples', 'oranges', 'pears'];
 * // fruits = 'grapes'; this a error
 * fruits.push('mangos');
 * console.log(fruits);
 *
 * fruits.unshift('strawberries');
 *
 * fruits.pop();
 *
 * console.log(Array.isArray(fruits));
 * console.log(Array.isArray("hello"));
 *
 *
 * console.log(fruits.indexOf('oranges')); */

/* console.log(fruits[0]); */

/* const person = {
 *   firstName: 'Pedro',
 *   lastName: 'Lara',
 *   age: 30,
 *   hobbies: ['musica', 'peliculas', 'deportes'],
 *   address: {
 *     street: 'los sauces st',
 *     city: 'Los muermos',
 *     state: 'Los lagos'
 *   }
 * }
 *
 * // console.log(person);
 * // console.log(person.firstName, person.lastName);
 * // console.log(person.hobbies[1]);
 * // console.log(person.address.city);
 *
 * // Descontructor
 * const { firstName, lastName, address: {city} } = person;
 *
 * console.log(firstName, lastName);
 * console.log(city);
 *
 * person.email = 'plara@gmail.com';
 *
 * console.log(person.email); */

/* const todos = [
 *   {
 *     id: 1,
 *     text: 'Bota la basura',
 *     isCompleted: true
 *   },
 *   {
 *     id: 2,
 *     text: 'Reunion con la jefatura',
 *     isCompleted: true
 *   },
 *   {
 *     id: 3,
 *     text: 'Cita con el dentista',
 *     isCompleted: false
 *   }
 * ]; */

// console.log(todos);
// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// Bucle For
/* for (let i = 0; i < 10; i++) {
 *   // console.log(i);
 *   console.log(`Número del loop: ${i}`);
 * } */

// Bucle while
/* let i = 0;
 * while(i < 10) {
 *   console.log(`Bucle while Número: ${i}`);
 *   i++;
 * }; */

/* for (let i = 0; i < todos.length; i++) {
 *   console.log(todos[i].text);
 * } */

/* for (let todo of todos) {
 *   console.log(todo.id);
 * } */

// forEach, map, filter
/* todos.forEach(function(todo) {
 *   console.log(todo.text);
 * }); */
/* const todoText = todos.map(function(todo) {
 *   return todo.text;
 * });
 * console.log(todoText); */

/* const todoCompleted = todos.filter(function(todo) {
 *   return todo.isCompleted === true;
 * }); */

/* const todoCompleted = todos.filter(function(todo) {
 *   return todo.isCompleted === true;
 * }).map(function(todo) {
 *   return todo.text
 * }); */

/* console.log(todoCompleted); */

