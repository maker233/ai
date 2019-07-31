//*Encontrar la palabra más larga en un string*//
const findLongestWordLength = str => {
  var string = str.substring(0, str.length).split(" ", str.length - 1);
  var text = [];
  string.forEach(item => text.push(item.length));
  return Math.max(...text);
};
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//*Devolver los números más grandes en array "2D"*//
const largestOfFour = arr => {
  const array = [];
  arr.forEach(item => array.push(Math.max(...item)));
  return array;
};
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39]]);

//*Confirmar si el final de un string es igual que...*//
const confirmEnding = (str, target) => str.endsWith(target);
//también se podría//
const confirmEnding = (str, target) =>
  str.slice(str.length - target.length) === target;
confirmEnding("Bastian", "n");

//*Repetir una string*//
const repeatStringNumTimes = (str, num) => (num <= 0 ? "" : str.repeat(num));
//también se podría//
const repeatStringNumTimes = (str, num) => {
  let accumulatedStr = "";
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
};
repeatStringNumTimes("abc", 3);

//*Truncar un string si es más larga que la longitud máxima*//
const truncateString = (str, num) =>
  str.length > num ? `${str.slice(0, num)} ${"..."}` : str;
truncateString("A-tisket a-tasket A green and yellow basket", 8);

//*Comprobar si es un tipo de dato o no*//
const booWho = bool => typeof bool === "boolean";
booWho(null);

//*Cambiar la primera letra de cada string a mayúscula y el resto minúscula*//
const titleCase = str => {
  const arr = str.split(" ");
  const result = arr.map(
    item => `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
  );
  return result.join(" ");
};
titleCase("I'm a little tea pot");

//*Insertar en una array elementos en el índice "n"*//
const frankenSplice = (arr1, arr2, n) => {
  const arrayNew = [...arr2];
  arrayNew.splice(n, 0, arr1);
  const result = [].concat(...arrayNew);
  return result;
};
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//*Eliminar todos los valores falsos de una array*//
const bouncer = arr => arr.filter(Boolean);
bouncer([7, "ate", "", false, 9]);

//*Devolver el indice que le pertenece estar según su valor*//
const getIndexToIns = (arr, num) =>
  arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
getIndexToIns([10, 20, 30, 40, 50], 40);
//*Comprueba si el primer elemento del array contiene las letras del segundo elemento*//
const mutation = arr => {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
};
mutation(["hello", "ehj"]);

//*Dividir un array en grupos de una longitud predefinidad en un array 2d*//
const chunkArrayInGroups = (arr, size) => {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, `${i}${size}`));
  }
  return arr2;
};
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

//*Encuentra el elemento diferente entre 2 arrays*//
const diffArray = (arr1, arr2) =>
  arr1
    .filter(item => !arr2.includes(item))
    .concat(arr2.filter(item => !arr1.includes(item)));
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

//*Busca en los argumentos de la function el array y el parametro para comparar
//y devuelve los elementos diferentes
//(accede a los argumentos de la function, por ese motivo no podemos usar las
//arrow function ("no vincula sus propios this,arguments,super o new.target";
//¡¡SON SIEMPRE ANÓNIMAS!!)*//
function destroyer(arr) {
  const compare = [...arguments].slice(1, arguments.length);
  return arr
    .filter(item => !compare.includes(item))
    .concat(compare.filter(item => !arr.includes(item)));
}

//*Encuentra en un array los objetos que contengan los pares de nombre,valor
//especificados en el segundo argumento de la function*//
const whatIsInAName = (collection, source) =>
  collection.filter(item =>
    Object.keys(source)
      .map(key => item.hasOwnProperty(key) && item[key] === source[key])
      .reduce((a, b) => a && b)
  );
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);