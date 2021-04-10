// Turn this function into an arrow function
function arrow() {
  return "es6 is awesome!";
}

const arrow2 = () => {     // o const arrow2 = () => "es6 is awesome!";
  return "es6 is awesome!"
};

console.log(arrow());
console.log(arrow2());

//Use the es6 syntax for default parameter
function defaultParameter(name) {
  var name = name || "sam";
  return name;
}


function defaultParameter2(name='sam') {
  return name;
}

console.log(defaultParameter());
console.log(defaultParameter2());
console.log(defaultParameter('hola'));
console.log(defaultParameter2('hola'));


// Use the spread operator to combine arr1 and arr2
function combineArrays(array2, array3) {
  let resultArray = [...array2,...array3];
  return resultArray;
}

class Test {
  constructor() {
    this.a = 'a';
    this.b = 'b';
    this.c = 'c';
    this.d = 'd';
  }
}
 const p0 = new Test(); 
 const p1 = new Test(); 
 const p2 = new Test(); 
 const p3  = new Test(); 

const array0 = [p0,p1];
const array1 = [p2,p3];
const array2 = [array0,array1];
const array3 = [...array0,...array1];

console.log(array2);
console.log(array3);

console.log(combineArrays(array2,array3));


//use destructuring to return the object's cyf property

const cyfcyf = {
  cyf : 'si',
  cef : 'tu',
  cof : 'mi',

}

function destructuring(obj) {
  const {cyf} = obj;
  return cyf;
} // tambien se puede destrucuturar el objeto directamente en los aprametros de la funcion 

console.log(destructuring(cyfcyf));

function destructuring2({cef}) {
  return cef;
} // tambien se puede destrucuturar el objeto directamente en los aprametros de la funcion 

console.log(destructuring2(cyfcyf));



// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
};

function templateString2(a, b) {
  return `The sum is equal to ${a + b}`;
};

console.log(templateString(2,1));
console.log(templateString2(2,1));




// practica : como redefinir la funcion toString 

// function Perro(nombre,criadero,color,sexo) {
//   this.nombre=nombre;
//   this.criadero=criadero;
//   this.color=color;
//   this.sexo=sexo;
// }

// let elPerro = new Perro("Gabby","Laboratorio","chocolate","femenino");

// console.log(elPerro);
// console.log(elPerro.toString());

// Perro.prototype.toString = function perroToString() {
//   var retorno = "Perro " + this.nombre + " es " + this.sexo + " " + this.color + " " + this.criadero;
//   return retorno;
// }

// console.log(elPerro);
// console.log(elPerro.toString());