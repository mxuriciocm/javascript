# Índice

- [Variables](#variables)
  - [var](#var)
  - [let](#let)
  - [const](#const)
- [Strings](#strings)
  - [Concatenar Strings](#concatenar-strings)
    - [concat](#concatstring)
    - [Operador +](#operador-)
    - [Operador '${}'](#operador--1)
  - [Métodos de Strings](#métodos-de-strings)
    - [length](#lenght)
    - [includes(string)](#includesstring)
    - [trimStart()](#trimstart)
    - [trimEnd()](#trimend)
    - [trim()](#trim)
    - [replace(searchValue, newValue)](#replacesearchvalue-newvalue)
    - [slice(start,end)](#slicestart-end)
    - [substring(start,end)](#substringstart-end)
    - [repeat(count)](#repeatcount)
    - [split(sparator)](#splitseparator)
    - [toLowerCase()](#tolowercase)
    - [toUpperCase()](#touppercase)
    - [toString()](#tostring)
- [Números](#números)
  - [Operaciones con Números](#operaciones-con-números)
  - [Objeto Math](#objeto-math)
  - [Métodos de Conversión y Validación de Números](#métodos-de-conversión-y-validación-de-números)
- [Operadores](#operadores)
- [Booleans](#booleans)
- [Objetos](#objetos)
  - [Creación de Objetos](#creacion-de-objetos)
  - [Obtención de Propiedades de Objetos](#obtención-de-propiedades-de-objetos)
  - [Agregar y eliminar Objetos](#agregar-y-eliminar-objetos)
  - [Object Destructuring](#object-destructuring)
  - [Objetos Anidados](#objetos-anidados)
  - [Desestructuración de Objetos Anidados](#desestructuración-de-objetos-anidados)
  - [Métodos de Objetos](#métodos-de-objetos)
- [Arreglos](#arreglos)
  - [Creación de Arreglos](#creación-de-arreglos)
  - [Obtención de elementos de un Arreglo](#obtención-de-elementos-de-un-arreglo)
  - [Métodos de Arreglos](#métodos-de-arreglos)
    - [push()](#push)
    - [unshift()](#unshift)
    - [pop()](#pop)
    - [shift()](#shift)
    - [slice()](#slicestart-end)
    - [forEach()](#foreach)
    - [map()](#map)
    - [includes()](#includes)
    - [some()](#some)
    - [findIndex()](#findindex)
    - [reduce()](#reduce)
    - [filter()](#filter)
    - [find()](#find)
    - [every()](#every)
    - [concat()](#concat)
    - [...(spread operator)](#spread-operator)
  - [Destructuring de Arreglos](#destructuring-de-arreglos)
- [Funciones](#funciones)
  - [Creación de Funciones](#creación-de-funciones)
  - [Llamada a Funciones](#llamada-a-funciones)
  - [Métodos vs Funciones](#métodos-vs-funciones)
  - [Funciones de Flecha](#funciones-de-flecha-arrow-functions)
- [Estructuras de Control](#estructuras-de-control)
  - [Operador if](#operador-if)
  - [Operador estricto ===](#operador-estricto-)
  - [Operadores > y <](#operadores--mayor-que-y--menor-que)
  - [Operador else if](#operador-else-if)
  - [Operador switch case](#operador-switch-case)
  - [Operador &&](#operador--and)
  - [Operador ||](#operador--or)
  - [Operador ternario](#operador-ternario)
- [Iteradores](#iteradores)
  - [Iterador for](#iterador-for)
  - [Iterador break vs continue](#iterador-break-vs-continue)
  - [Iterador while](#iterador-while)
  - [Iterador do-while](#iterador-do-while)
  - [Iterador forEach](#iterador-foreach)
  - [Iterador forOf](#iterador-forof)
  - [Iterador forIn](#iterador-forin)
- [DOM (Document Object Model)](#dom-document-object-model)
  - [Métodos de selección de elementos en el DOM](#métodos-de-selección-de-elementos-en-el-dom)
    - [getElementByClassName()](#getelementsbyclassname)
    - [getElementById()](#getelementbyid)
    - [querySelector()](#queryselector)
    - [querySelectorAll()](#queryselectorall)
  - [Propiedades de contenido del DOM](#propiedades-de-contenido-del-dom)
    - [innerText](#innerhtml)
    - [innerHTML](#innerhtml)
    - [textContent](#textcontent)
  - [Propiedades de estilos del DOM](#propiedades-de-estilos-del-dom)
    - [style](#style)
    - [classList](#classlist)
  - [Traversing the DOM](#traversing-the-dom)
    - [children](#children)
    - [childNodes](#childnodes)
    - [parentNode](#parentnode)
    - [parentElement](#parentelement)
    - [nextElementSibling](#nextelementsibling)
  - [Eliminar elementos del DOM](#eliminar-elementos-del-dom)
    - [remove](#remove)
    - [removeChild](#removechild)
  - [Crear o insertar elementos HTML](#crear-e-insertar-elementos-html)
    - [createElement](#createelement)
    - [appendChild](#appendchild)
    - [insertBefore](#insertbefore)
- [Local Storage](#localstorage)
  - [setItem](#setitemkey-value)
  - [getItem](#getitemkey)
  - [removeItem](#removeitemkey)
  - [clear](#clear)

## Variables

En JavaScript hay 3 tipos de variables que se puede usar: `var`, `let` y `const`. Cada una tiene sus propias características y reglas de uso.

### var

- Alcance: El alcance está limitado a la función en la que se declara, o al contexto global si se declara fuera de una función. No respeta el alcance de bloque.
- Reasignación: Puedes reasignar una variable declarada con var tantas veces como necesites.
- Inicialización: Las variables declaradas con var pueden ser inicializadas después de su declaración, aunque su valor inicial será undefined hasta que se les asigne un valor.

### let

- Alcance: Tiene un alcance de bloque, lo que significa que solo es accesible dentro del bloque de código en el que se declara (por ejemplo, dentro de {}).
- Reasignación: Similar a var, las variables pueden ser reasignadas.
- Inicialización: Puedes declarar una variable con let sin inicializarla. Su valor inicial será undefined hasta que le asignes un valor.

### const

- Alcance: Tiene un alcance de bloque, al igual que let.
- Reasignación: Una vez que se asigna un valor, no puede ser reasignado. Sin embargo, si la variable contiene un objeto o un array, las propiedades del objeto o los elementos del array pueden ser modificados.
- Inicialización: Deben ser inicializadas al momento de su declaración; de lo contrario, se lanzará un error.

---

## Strings

En JavaScript, un string es una secuencia de caracteres utilizada para representar texto. Hay varias formas de crear un string:

- Comillas simples ('')
- Comillas dobles ("")
- Template literals (`${}`) que permiten incluir expresiones y variables de manera más flexible.

---

### Concatenar Strings

Hay diversas maneras de concatenar strings en JavaScript:

#### concat(string)

Este método permite unir dos o más strings y devuelve un nuevo string.

```js
let str1 = "Hola";
let str2 = "Mundo";
let resultado = str1.concat(" ", str2); // "Hola Mundo"
```

#### Operador (+)

El operador `+` es una forma común de unir strings.

```js
let saludo = "Hola" + " " + "Mundo"; // "Hola Mundo"
```

#### Operador '${}'

Esta es la forma más óptima y moderna de concatenar strings, especialmente cuando necesitas incluir variables o expresiones. Utiliza backticks ` (``) ` en lugar de comillas.

```js
let nombre = "Mundo";
let saludo = `Hola ${nombre}`; // "Hola Mundo"
```

### Métodos de Strings

JavaScript proporciona varios métodos útiles para trabajar con strings:

#### lenght

La propiedad length te permite saber el número de caracteres en un string.

```js
let texto = "JavaScript";
let longitud = texto.length; // 10
```

#### includes(string)

Devuelve un valor booleano (true o false) que indica si un string contiene el valor especificado.

```js
let frase = "Aprender JavaScript es divertido";
let contienePalabra = frase.includes("JavaScript"); // true
```

#### trimStart()

Elimina los espacios en blanco al inicio del string.

```js
let texto = "   Hola";
console.log(texto.trimStart()); // "Hola"
```

#### trimEnd()

Elimina los espacios en blanco al final del string.

```js
let texto = "Hola   ";
console.log(texto.trimEnd()); // "Hola"
```

#### trim()

Elimina los espacios en blanco tanto al inicio como al final del string.

```js
let texto = "   Hola   ";
console.log(texto.trim()); // "Hola"
```

#### replace(searchValue, newValue)

Reemplaza una parte del string por otra.

```js
let texto = "Hola Mundo";
console.log(texto.replace("Mundo", "Amigo")); // "Hola Amigo"
```

#### slice(start, end)

Extrae una sección del string y devuelve una nueva cadena sin modificar la original.

```js
let texto = "Hola Mundo";
console.log(texto.slice(0, 4)); // "Hola"
```

#### substring(start, end)

Similar a slice(), pero intercambia los valores si el índice inicial es mayor que el final, evitando errores.

```js
let texto = "Hola Mundo";
console.log(texto.substring(4, 0)); // "Hola"
```

#### repeat(count)

Repite el string un número específico de veces.

```js
let texto = "Hola";
console.log(texto.repeat(3)); // "HolaHolaHola"
```

#### split(separator)

Divide un string en un array de substrings usando un separador especificado.

```js
let texto = "Hola Mundo";
console.log(texto.split(" ")); // ["Hola", "Mundo"]
```

#### toLowerCase()

Convierte todos los caracteres del string a minúsculas..

```js
let texto = "Hola Mundo";
console.log(texto.toLowerCase()); // "hola mundo"
```

#### toUpperCase()

Convierte todos los caracteres del string a mayúsculas.

```js
let texto = "Hola Mundo";
console.log(texto.toUpperCase()); // "HOLA MUNDO"
```

#### toString():

Convierte un valor en un string.

```js
let numero = 123;
console.log(numero.toString()); // "123"
```

## Números

En JavaScript, la manipulación de números es directa y sencilla. A diferencia de otros lenguajes, JavaScript maneja todos los números (enteros y decimales) de la misma manera.

### Operaciones con Números

Para realizar operaciones con numeros es bastante sencillo.

`Suma(+):` Añadir dos o más números.

```js
let suma = 5 + 3; // 8
```

`Resta(-):` Restar un número de otro.

```js
let resta = 10 - 4; // 6
```

`Multiplicación(*):` Multiplicar dos o más números.

```js
let multiplicacion = 6 * 7; // 42
```

`División(/):` Dividir un número entre otro.

```js
let division = 20 / 5; // 4
```

`modulo(%)`: Obtener el residuo de una división.

```js
let modulo = 10 % 3; // 1
```

### Objeto Math

JavaScript proporciona el objeto `Math` para realizar operaciones matemáticas avanzadas:

`Math.PI():`Devuelve el valor de π (aproximadamente 3.14159).

```js
let pi = Math.PI; // 3.141592653589793
```

`Math.ceil():` Redondea un número hacia arriba al entero más cercano.

```js
let redondeoArriba = Math.ceil(4.2); // 5
```

`Math.floor():` Redondear un numero hacia abajo.

```js
let redondeoAbajo = Math.floor(4.7); // 4
```

`Math.sqrt(number):` Sacar la raiz cuadrada de un numero

```js
let raizCuadrada = Math.sqrt(16); // 4
```

`Math.abs(number):` Devuelve el valor absoluto de un número (sin signo).

```js
let valorAbsoluto = Math.abs(-5); // 5
```

`Math.pow(number, exponent):` Elevar un numero.

`Math.min(a, b, c, ...)`: Devuelve el valor mínimo de una lista de números.

```js
let minimo = Math.min(3, 5, 1, 9); // 1
```

`Math.max(a, b, c, ...)`: Devuelve el valor máximo de una lista de números.

```js
let maximo = Math.max(3, 5, 1, 9); // 9
```

`Math.random():` Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).

```js
let aleatorio = Math.random(); // Ejemplo: 0.673141
```

### Métodos de Conversión y Validación de Números

`Number.parseInt(string):` Convierte un string en un número entero, ignorando los caracteres no numéricos al final.

```js
let entero = Number.parseInt("42px"); // 42
```

`Number.parseFloat(string):` Convierte un string en un número de punto flotante (decimal).

```js
let flotante = Number.parseFloat("3.14em"); // 3.14
```

`Number.isInteger(value):` Verifica si un valor es un número entero.

```js
let esEntero = Number.isInteger(4); // true
let noEsEntero = Number.isInteger(4.5); // false
```

---

## Operadores

Los operadores de comparación se utilizan para evaluar relaciones entre valores y devolver un resultado booleano (true o false).

`< (menor que):` Compara si el valor de la izquierda es menor que el de la derecha.

```js
let esMenor = 5 < 10; // true
```

`> (mayor que):` Compara si el valor de la izquierda es mayor que el de la derecha.

```js
let esMayor = 10 > 5; // true
```

`== (igualdad debil):` Compara si dos valores son iguales después de realizar conversiones de tipo (coerción). Este operador no distingue entre tipos de datos.

```js
let esIgual = 5 == "5"; // true
```

`=== (igualdad estricta):` Compara si dos valores son estrictamente iguales, tanto en valor como en tipo de dato. No realiza conversiones de tipo.

```js
let esEstrictoIgual = 5 === "5"; // false
```

`!= (desigualdad debil):` Compara si dos valores son diferentes, realizando conversiones de tipo. Este operador no distingue entre tipos de datos.

```js
let esDiferente = 5 != "5"; // false
```

`!== (desigualdad estricta):` Compara si dos valores son diferentes, tanto en valor como en tipo de dato. No realiza conversiones de tipo.

```js
let esEstrictoDiferente = 5 !== "5"; // true
```

---

## Booleans

Un valor booleano es un tipo de dato en JavaScript que solo puede tener dos posibles valores: true o false. Los booleans se utilizan comúnmente para representar estados binarios (encendido/apagado, verdadero/falso) y para el control de flujo en condiciones.

- Creación de Booleans: Puedes crear booleans directamente asignando los valores true o false a una variable.

```js
let esVerdadero = true;
let esFalso = false;
```

- Comparación de Booleans: Los valores booleanos se utilizan en comparaciones para evaluar expresiones y determinar si una condición es verdadera o falsa.

---

## Objetos

Los objetos son una estructura fundamental en JavaScript que permite almacenar múltiples valores en una única entidad. Estos valores se representan como pares clave-valor.

### Creacion de Objetos

Existen dos formas principales de crear objetos en JavaScript:

- `Object Literal:` Es la forma más común y sencilla de crear un objeto.

```js
const producto = {
  nombre: "Mauricio",
  edad: 19,
  apellido: "Chacon",
};
```

- `Object Constructor:` Se utiliza para crear instancias de un objeto mediante una función constructora.

```js
function Producto(nombre, edad, apellido) {
  this.nombre = nombre;
  this.edad = edad;
  this.apellido = apellido;
}

const producto = new Producto("Mauricio", 19, "Chacon");
```

### Obtención de Propiedades de Objetos

Para acceder a los valores de las propiedades de un objeto, se utilizan dos métodos principales:

- `Notación de punto (.):` Es la forma más común de acceder a las propiedades.

```js
console.log(producto.nombre);
```

- `Notación de corchetes (['']):` Se utiliza principalmente cuando el nombre de la propiedad es dinámico o contiene caracteres especiales.

```js
console.log(producto.['nombre']);
```

### Agregar y eliminar Objetos

- `Agregar Propiedades:` Puedes agregar nuevas propiedades a un objeto simplemente asignándolas.

```js
producto.imagen = "imagen.jpg";
console.log(producto.imagen); // imagen.jpg
```

- `Eliminar Propiedades:` Utiliza la palabra reservada delete para eliminar una propiedad de un objeto.

```js
delete producto.edad;
console.log(producto.edad); // undefined
```

### Object Destructuring

La desestructuración de objetos permite extraer propiedades en variables individuales de manera más concisa.

```js
const { nombre, edad, apellido } = producto;
console.log(edad); // 19
```

### Objetos Anidados

Es posible tener objetos dentro de otros objetos, lo que permite organizar mejor los datos.

```js
const producto = {
  nombre: "Mauricio",
  edad: 19,
  apellido: "Chacon",
  hobbies: {
    ocio: "videojuegos",
    deportes: "futbol",
  },
};

console.log(producto.hobbies.ocio); // videojuegos
```

### Desestructuración de Objetos Anidados:

```js
const {
  hobbies: { ocio },
} = producto;
console.log(ocio); // videojuegos
```

### Métodos de Objetos

JavaScript proporciona varios métodos útiles para manipular objetos:

`Object.freeze(obj):` Congela el objeto, impidiendo cualquier modificación.

```js
Object.freeze(producto);
```

`Object.seal(obj):` Sella el objeto, permitiendo solo la modificación de propiedades existentes, pero no agregar o eliminar propiedades.

```js
Object.seal(producto);
```

`Object.assign(obj1, obj2):` Combina las propiedades de dos objetos en uno nuevo.

```js
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas)

const resultado = Object.assign(producto,medidas);

`Spread Operator`: Una alternativa moderna a `Object.assign` para combinar objetos.
// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas}
```

`Object.keys(obj):` Retorna un array que contiene todas las claves (propiedades) de un objeto.

```js
const producto = {
  nombre: "Mauricio",
  edad: 19,
  apellido: "Chacon",
};

console.log(Object.keys(producto)); // ["nombre", "edad", "apellido"]
```

`Object.values(obj):` Retorna un array con todos los valores de las propiedades de un objeto.

```js
console.log(Object.values(producto)); // ["Mauricio", 19, "Chacon"]
```

`Object.entries(obj):` Retorna un array de arrays, donde cada sub-array contiene un par clave-valor del objeto. Es útil para iterar sobre las propiedades y sus valores.

```js
console.log(Object.entries(producto));
// [["nombre", "Mauricio"], ["edad", 19], ["apellido", "Chacon"]]
```

---

## Arreglos

Los arreglos en JavaScript son estructuras de datos que permiten almacenar múltiples valores en una sola variable. Estos valores pueden ser de cualquier tipo, incluyendo otros arreglos.

### Creación de Arreglos

Existen dos formas principales de crear arreglos en JavaScript:

- `Notación de corchetes ([]):` Es la forma más común y sencilla de crear un arreglo.

```js
const numeros = [10, 20, 30, 40, 50];
```

- `new Array():` Otra manera de crear un arreglo, aunque es menos utilizada.

```js
const numeros = new Array(10, 20, 30, 40, 50);
```

### Obtención de elementos de un Arreglo

Para acceder a un elemento específico de un arreglo, se utiliza su índice entre corchetes []. Los índices comienzan en 0, lo que significa que el primer elemento está en la posición 0, el segundo en la posición 1, y así sucesivamente.

- `Notación de corchetes ([]):` Para acceder a los elementos del arreglo, se utiliza la posicion que va entre corchetes [].

```js
const numeros = [10, 20, 30, 40, 50];
console.log(numeros[1]); //20
```

### Métodos de Arreglos

#### push()

Agrega un elemento al final del arreglo.

```js
numeros.push(60);
```

#### unshift()

Agrega un elemento al inicio del arreglo.

```js
numeros.unshift(0);
```

#### pop()

Elimina el último elemento del arreglo.

```js
numeros.pop();
```

#### shift()

Elimina el primer elemento del arreglo.

```js
numeros.shift();
```

#### slice(start, end)

Crea un nuevo arreglo copiando una porción del arreglo original desde la posición start hasta end (sin incluir end).

```js
const subArray = numeros.slice(1, 3); // [20, 30]
```

#### forEach()

Itera sobre cada elemento del arreglo y ejecuta una función para cada uno de ellos.

```js
numeros.forEach(function (numero) {
  console.log(numero);
});
```

#### map()

Similar a forEach, pero además de iterar sobre el arreglo, devuelve un nuevo arreglo con los resultados de la función aplicada a cada elemento.

```js
const numerosDoblados = numeros.map(function (numero) {
  return numero * 2;
});
console.log(numerosDoblados); // [20, 40, 60, 80, 100]
```

#### includes()

Devuelve true si el arreglo contiene el elemento especificado, de lo contrario, devuelve false.

```js
const existe = numeros.includes(30);
console.log(existe); // true
```

#### some()

Devuelve true si al menos un elemento del arreglo cumple con una condición específica definida en una función.

```js
const tieneMayorQueCincuenta = numeros.some(function (numero) {
  return numero > 50;
});
console.log(tieneMayorQueCincuenta); // false
```

#### findIndex()

Devuelve el índice del primer elemento que cumple con una condición definida en una función. Si no encuentra ninguno, devuelve -1.

```js
const indice = numeros.findIndex(function (numero) {
  return numero === 30;
});
console.log(indice); // 2
```

#### reduce()

Aplica una función a un acumulador y a cada valor del arreglo (de izquierda a derecha) para reducirlo a un solo valor.

```js
const sumaTotal = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(sumaTotal); // 150
```

#### filter()

Crea un nuevo arreglo con todos los elementos que cumplen con una condición definida en una función.

```js
const numerosMayoresQueTreinta = numeros.filter(function (numero) {
  return numero > 30;
});
console.log(numerosMayoresQueTreinta); // [40, 50]
```

#### find()

Devuelve el primer elemento que cumple con una condición definida en una función. Si no encuentra ninguno, devuelve undefined.

```js
const primerNumeroMayorQueTreinta = numeros.find(function (numero) {
  return numero > 30;
});
console.log(primerNumeroMayorQueTreinta); // 40
```

#### every()

Devuelve true si todos los elementos del arreglo cumplen con una condición definida en una función.

```js
const todosMenoresQueCien = numeros.every(function (numero) {
  return numero < 100;
});
console.log(todosMenoresQueCien); // true
```

#### concat()

Combina dos o más arreglos y devuelve un nuevo arreglo.

```js
const otrosNumeros = [60, 70];
const combinado = numeros.concat(otrosNumeros);
console.log(combinado); // [10, 20, 30, 40, 50, 60, 70]
```

### ...(spread operator)

Desempaqueta los elementos de un arreglo (o cualquier iterable) en otro contexto, como dentro de un nuevo arreglo o función.

```js
const copia = [...numeros];
console.log(copia); // [10, 20, 30, 40, 50]
```

### Destructuring de Arreglos

El destructuring permite extraer valores de un arreglo y asignarlos a variables de manera sencilla.

```js
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;

console.log(tercero);
```

---

## Funciones

Las funciones en JavaScript son bloques de código reutilizables diseñados para realizar una tarea específica. Puedes definir funciones de diferentes maneras y utilizarlas para ejecutar código en distintos contextos.

### Creación de Funciones

Existen dos formas principales de definir funciones en JavaScript:

`Declaración de Función (Function declaration):` Es la forma más común de definir una función. Se puede llamar a la función antes de su declaración debido al hoisting.

```js
function saludar(nombre) {
  console.log("Hola, " + nombre);
}
```

`Expresión de Función (Function expression):`Se define como una parte de una expresión y no es elevada. Debe ser definida antes de su uso.

```js
const multiplicar = function (a, b) {
  return a * b;
};
```

### Llamada a funciones

Para ejecutar una función, se usa su nombre seguido de paréntesis. Si la función tiene parámetros, se deben pasar dentro de los paréntesis.

```js
saludar("Ana"); // Salida: Hola, Ana
const resultado = multiplicar(2, 3);
console.log(resultado); // Salida: 6
```

### Métodos vs Funciones

`Función:` Es un bloque de código que se puede definir en cualquier parte del programa y se invoca usando su nombre seguido de paréntesis.

```js
function miFuncion() {
  console.log("Esto es una función");
}
miFuncion(); // Salida: Esto es una función
```

`Método:` Es una función asociada a un objeto. Se llama utilizando el nombre del objeto seguido de un punto y el nombre del método seguido de paréntesis.

```js
const persona = {
  nombre: "Ana",
  saludar: function () {
    console.log("Hola, soy " + this.nombre);
  },
};
persona.saludar(); // Salida: Hola, soy Ana
```

### Funciones de Flecha (Arrow Functions)

Las funciones de flecha proporcionan una sintaxis más concisa para escribir funciones. No tienen su propio this, sino que heredan el this del contexto en el que se crean.

```js
const suma = (a, b) => a + b;
console.log(suma(5, 3)); // Salida: 8
```

## Estructuras de Control

### Operador if

El operador `if` se utiliza para ejecutar un bloque de código solo si una condición es verdadera. Si la condición es falsa, el bloque no se ejecuta.

```js
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

### Operador estricto ===

El operador de comparación estricta `===` evalúa tanto el valor como el tipo de dato de las variables. A diferencia del operador `==`, que solo compara los valores, el operador `===` también se asegura de que los tipos sean idénticos.

```js
console.log(5 === "5"); // false (número vs string)
console.log(5 === 5); // true (ambos son números)
```

### Operadores > (mayor que) y < (menor que)

Estos operadores comparan dos valores y devuelven true o false dependiendo de la relación entre ellos. El operador `>` devuelve true si el valor a la izquierda es mayor que el de la derecha. El operador `<` devuelve true si es menor.

```js
console.log(10 > 5); // true
console.log(3 < 7); // true
```

### Operador else if

El operador `else if` se utiliza cuando quieres evaluar múltiples condiciones. Si la condición en el if original es falsa, el programa comprobará las condiciones adicionales con `else if`.

```js
let nota = 85;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else {
  console.log("C");
}
```

### Operador Switch case

La estructura `switch` evalúa una expresión y ejecuta el bloque de código correspondiente al primer case que coincida con el valor de la expresión. Si ningún case coincide, se puede ejecutar un bloque default.

```js
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día no válido");
}
```

### Operador && (AND)

El operador `&&` evalúa dos o más condiciones y devuelve true solo si todas las condiciones son verdaderas.

```js
let edad = 25;
let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
  console.log("Puedes conducir");
}
```

### Operador || (OR)

El operador `||` devuelve true si al menos una de las condiciones es verdadera.

```js
let tienePermiso = false;
let esAdministrador = true;

if (tienePermiso || esAdministrador) {
  console.log("Acceso permitido");
}
```

### Operador ternario

El operador ternario es una forma compacta de escribir una condición `if-else`. Tiene la sintaxis condición `?` valorSiVerdadero `:` valorSiFalso.

```js
let edad = 20;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje); // "Eres mayor de edad"
```

---

## Iteradores

Los iteradores en JavaScript permiten recorrer o iterar sobre elementos de colecciones como arrays, objetos, y strings. A continuación se detallan algunos de los operadores y métodos más comunes para realizar iteraciones.

### Iterador for

El operador `for` permite ejecutar un bloque de código un número específico de veces. Es útil cuando se conoce el número de iteraciones de antemano.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### Iterador break vs continue

- `break`: Termina el ciclo inmediatamente.
- `continue`: Salta la iteración actual y continúa con la siguiente.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) break; // Sale del ciclo cuando i es 3
  console.log(i);
}
```

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // Salta cuando i es 3
  console.log(i);
}
```

### Iterador while

El ciclo `while` se ejecuta mientras una condición sea verdadera. Es útil cuando no se sabe cuántas iteraciones serán necesarias.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Iterador do-while

El ciclo `do-while` es similar al while, pero siempre ejecuta el bloque de código al menos una vez, ya que evalúa la condición al final de cada iteración.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### Iterador forEach

El método `forEach` permite ejecutar una función para cada elemento de un array. No es posible usar break o continue dentro de forEach.

```js
const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
  console.log(element);
});
```

### Iterador forOf

El iterador `for...of` permite recorrer arrays, strings, y otros objetos iterables. Itera sobre los valores de los elementos iterables.

```js
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}
```

### Iterador forIn

El iterador `for...in` recorre las propiedades enumerables de un objeto, incluidas las propiedades heredadas.

```js
const objeto = { a: 1, b: 2, c: 3 };
for (const key in objeto) {
  console.log(key, objeto[key]);
}
```

---

## DOM (Document Object Model)

El DOM proporciona una representación estructurada del documento y define cómo los programas pueden acceder y manipular el contenido, la estructura y los estilos del documento. Todos los métodos que se utilizan para acceder al DOM emplean el prefijo `document`.

### Métodos de selección de elementos en el DOM

#### getElementsByClassName()

Este método permite seleccionar elementos del DOM por su clase CSS. Retorna una lista de todos los elementos que tienen la clase especificada. Aunque útil, su uso ha disminuido con la aparición de métodos más avanzados.

```js
document.getElementsByClassName("mi-clase");
```

#### getElementById()

Este método permite seleccionar un elemento del DOM por su ID único. Aunque sigue siendo válido, ha sido reemplazado en muchos casos por métodos más versátiles.

```js
document.getElementById("mi-id");
```

#### querySelector()

Una forma más moderna y flexible de seleccionar elementos. Utiliza un selector de CSS para especificar el elemento deseado (ya sea por clase, ID u otros atributos). Si hay múltiples elementos que coinciden con el selector, devolverá solo el primero.

```js
document.querySelector(".mi-clase");
```

#### querySelectorAll()

Similar a querySelector, pero devuelve todos los elementos que coinciden con el selector CSS en forma de NodeList. Permite iterar sobre todos los elementos que cumplan con la condición del selector.

```js
document.querySelectorAll(".mi-clase");
```

### Propiedades de contenido del DOM

#### innerText

Devuelve el texto visible dentro de un elemento, excluyendo cualquier texto que esté oculto por CSS. También se puede establecer para cambiar el texto visible.

```js
element.innerText = "Nuevo texto visible";
```

#### innerHTML

Devuelve el contenido HTML dentro de un elemento, incluyendo cualquier elemento hijo. Se puede utilizar para cambiar el contenido HTML del elemento, permitiendo agregar, eliminar o modificar elementos hijos.

```js
element.innerHTML = "<p>Nuevo contenido HTML</p>";
```

#### textContent

Devuelve el texto dentro de un elemento, incluyendo el de los elementos hijos, pero sin interpretar el marcado HTML. Cualquier HTML dentro de este texto será tratado como texto plano.

```js
element.textContent = "Texto sin interpretar HTML";
```

### Propiedades de estilos del DOM

#### style

Esta propiedad permite modificar los estilos CSS directamente en un elemento.

```js
element.style.color = "blue";
```

#### classList

Proporciona métodos para agregar, eliminar y verificar clases en un elemento. Esto puede afectar los estilos definidos en CSS para esas clases.

```js
element.classList.add("nueva-clase");
element.classList.remove("mi-clase");
```

### Traversing the DOM

#### children

Permite acceder exclusivamente a los elementos hijos de un nodo, sin incluir los espacios en blanco o nodos de texto.

```js
const lista = document.getElementById("lista");
const hijos = lista.children;

console.log(hijos); // Devuelve una HTMLCollection de <li> elementos.
console.log(hijos[0].innerText); // Muestra: Elemento 1
```

#### childNodes

Devuelve todos los nodos hijos de un elemento, incluidos los nodos de texto y espacios en blanco.

```js
const lista = document.getElementById("lista");
const nodosHijos = lista.childNodes;

console.log(nodosHijos); // Devuelve una NodeList que incluye nodos de texto y espacios en blanco.
console.log(nodosHijos[1].nodeType); // Muestra: 3 (nodo de texto)
```

#### parentNode

Accede al nodo padre de un elemento, incluyendo espacios en blanco.

```js
const parrafo = document.getElementById("parrafo");
const nodoPadre = parrafo.parentNode;

console.log(nodoPadre.id); // Muestra: contenedor
```

#### parentElement

Accede exclusivamente al padre de un elemento, sin incluir los espacios en blanco, lo que lo hace más limpio que parentNode.

```js
const parrafo = document.getElementById("parrafo");
const elementoPadre = parrafo.parentElement;

console.log(elementoPadre.id); // Muestra: contenedor
```

#### nextElementSibling

Devuelve el siguiente elemento hermano de un nodo, excluyendo los nodos de texto.

```js
const item1 = document.getElementById("item1");
const siguienteHermano = item1.nextElementSibling;

console.log(siguienteHermano.innerText); // Muestra: Elemento 2
```

### Eliminar elementos del DOM

#### remove

Permite eliminar un elemento directamente del DOM.

#### removeChild

Permite eliminar un elemento hijo del DOM. Se llama en el elemento padre y se pasa como argumento el elemento hijo que se desea eliminar.

### Crear e insertar elementos HTML

#### createElement

Crea un nuevo elemento HTML con la etiqueta especificada.

```js
let newElement = document.createElement("div");
```

#### appendChild

Inserta un elemento HTML como hijo de otro elemento. El nuevo elemento se agregará al final de la lista de hijos.

```js
parentElement.appendChild(newElement);
```

#### insertBefore

Inserta un elemento antes de otro elemento especificado en el DOM. Si el segundo argumento es null, el elemento se inserta al final del padre.

```js
parentElement.insertBefore(newElement, referenceElement);
```

## Eventos

Los eventos son acciones que ocurren en respuesta a una interacción del usuario o a otros sucesos en la aplicación web. Estos eventos pueden ser capturados y manejados por el código JavaScript para realizar acciones específicas. Para registrar un evento y asociarlo a un elemento HTML, se utiliza el método `addEventListener`, el cual se accede a través del objeto `document`.

### addEventListener

Este método es esencial en JavaScript para agregar funciones que se ejecutarán en respuesta a eventos específicos en un elemento del DOM. Se utiliza para vincular un manipulador de eventos a un elemento HTML y especificar qué función se ejecutará cuando ocurra el evento.

```js
element.addEventListener("click", (e) => {
  console.log("Elemento clickeado", e);
});
```

### Eventos del mouse

Los eventos del mouse son acciones que ocurren cuando se interactúa con el mouse en la interfaz de usuario de una aplicación web. JavaScript proporciona varios eventos del mouse que pueden ser utilizados para responder a diferentes acciones del usuario.

#### click

Se desencadena cuando se hace clic con el botón izquierdo del mouse en un elemento.

```js
element.addEventListener("click", (e) => {
  console.log("Elemento clickeado", e);
});
```

#### mousedown

Se desencadena cuando se presiona un botón del mouse mientras el cursor está sobre un elemento.

```js
element.addEventListener("mousedown", (e) => {
  console.log("Botón del mouse presionado", e);
});
```

#### dblclick

Se desencadena cuando se hace doble clic con el botón izquierdo del mouse en un elemento.

```js
element.addEventListener("dblclick", (e) => {
  console.log("Elemento doble clickeado", e);
});
```

#### mouseup

Se desencadena cuando se suelta un botón del mouse después de hacer clic en un elemento.

```js
element.addEventListener("mouseup", (e) => {
  console.log("Botón del mouse soltado", e);
});
```

#### mouseout

Se desencadena cuando el cursor del mouse sale de un elemento.

```js
element.addEventListener("mouseout", (e) => {
  console.log("El mouse salió del elemento", e);
});
```

#### mouseenter

Se desencadena cuando el cursor del mouse entra en un elemento.

```js
element.addEventListener("mouseenter", (e) => {
  console.log("El mouse entró al elemento", e);
});
```

### Eventos del teclado

Los eventos del teclado se utilizan para detectar acciones del usuario en el teclado. Estos eventos permiten responder a la entrada del teclado y realizar acciones específicas en consecuencia.

#### input

Se desencadena cuando se cambia el valor de un elemento de entrada, como un campo de texto o un área de texto.

```js
inputElement.addEventListener("input", (e) => {
  console.log("Entrada de texto: ", e.target.value);
});
```

#### keydown

Se desencadena cuando se presiona una tecla en el teclado.

```js
document.addEventListener("keydown", (e) => {
  console.log("Tecla presionada: ", e.key);
});
```

#### keyup

Se desencadena cuando se suelta una tecla en el teclado después de haber sido presionada.

```js
document.addEventListener("keyup", (e) => {
  console.log("Tecla soltada: ", e.key);
});
```

#### blur

Se desencadena cuando un elemento pierde el foco, es decir, cuando deja de ser el elemento activo para la entrada del usuario.

```js
inputElement.addEventListener("blur", (e) => {
  console.log("El campo perdió el foco");
});
```

#### copy

Se desencadena cuando el usuario copia contenido seleccionado.

```js
document.addEventListener("copy", (e) => {
  console.log("Contenido copiado");
});
```

#### paste

Se desencadena cuando el usuario pega contenido en un elemento seleccionado.

```js
document.addEventListener("paste", (e) => {
  console.log("Contenido pegado");
});
```

### Eventos de los elementos

Cuando se utilizan eventos en JavaScript, es común pasar un parámetro a la función del manejador de eventos. Este parámetro, comúnmente llamado event o simplemente e, proporciona información adicional sobre el evento que ocurrió y el elemento sobre el cual se produjo el evento.

#### e.type

Proporciona el tipo de evento que ocurrió, como 'click', 'input', 'mouseover', etc.

```js
busqueda.addEventListener("input", (e) => {
  console.log(e.type);
});
```

#### e.target

Hace referencia al elemento sobre el cual se produjo el evento.

```js
busqueda.addEventListener("input", (e) => {
  console.log(e.target);
});
```

#### e.value

Específico para eventos de entrada como 'input', esta propiedad devuelve el valor actual del elemento. Por ejemplo, el texto dentro de un campo de entrada `(<input>)` o el contenido de un área de texto `(<textarea>)`.

```js
busqueda.addEventListener("input", (e) => {
  console.log(e.value);
});
```

#### e.preventDefault()

Método que evita el comportamiento predeterminado del evento, como evitar que un enlace se siga o que se envíe un formulario.

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario no enviado");
});
```

#### e.stopPropagation()

Método que detiene la propagación del evento a elementos superiores o inferiores en la jerarquía del DOM.

```js
childElement.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Click solo en este elemento");
});
```

### Otros Eventos importantes

#### submit

Se desencadena cuando se envía un formulario. Puedes usar este evento para validar los datos ingresados por el usuario antes de enviar el formulario al servidor.

```js
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Formulario enviado");
});
```

#### scroll

Se desencadena cuando un elemento con desplazamiento (scroll) se desplaza. Puedes usar este evento para implementar comportamientos dinámicos basados en la posición de desplazamiento del usuario, como cargar más contenido cuando se alcanza el final de una página.

```js
window.addEventListener("scroll", () => {
  console.log("Scroll detectado");
});
```

#### change

Se desencadena cuando el valor de un elemento cambia, como un campo de entrada `(<input>)`, un área de texto `(<textarea>)` o un menú desplegable `(<select>)`. Es útil para capturar cambios en los elementos y responder en consecuencia.

```js
selectElement.addEventListener("change", (e) => {
  console.log("El valor ha cambiado a: ", e.target.value);
});
```

#### focus

Se desencadena cuando un elemento recibe el foco, es decir, cuando se convierte en el elemento activo para la entrada del usuario. Puedes usar este evento para realizar acciones cuando el usuario comienza a interactuar con un elemento, como resaltar un campo de entrada o mostrar ayuda contextual.

```js
inputElement.addEventListener("focus", () => {
  console.log("El campo ha recibido el foco");
});
```

#### resize

Se desencadena cuando el tamaño de la ventana del navegador cambia. Es útil para ajustar la interfaz de usuario en respuesta a cambios en el tamaño de la ventana, como hacer que ciertos elementos sean responsivos.

```js
window.addEventListener("resize", () => {
  console.log("Tamaño de ventana cambiado");
});
```

## LocalStorage

LocalStorage es una API integrada en JavaScript que permite almacenar datos de manera persistente en el navegador. Los datos permanecen disponibles incluso después de cerrar la pestaña o el navegador, lo que la hace útil para almacenar configuraciones, preferencias del usuario o cualquier información que deba persistir. LocalStorage almacena datos en formato de texto clave-valor, y su capacidad de almacenamiento varía entre navegadores, con un límite aproximado de 5MB.

### setItem(key, value)

El método setItem permite agregar un nuevo elemento al LocalStorage. Recibe dos parámetros: la clave (key) con la que se identificará el valor y el valor en sí mismo (value). Si el valor que deseas almacenar es un objeto o un arreglo, es necesario convertirlo en un string utilizando JSON.stringify() antes de guardarlo.

```js
localStorage.setItem("nombre", "Mauricio");

const product = {
  name: "Monitor 24 Pulgadas",
  price: 300,
};
const productString = JSON.stringify(product);
localStorage.setItem("product", productString);
```

### getItem(key)

El método getItem permite recuperar un valor almacenado en el LocalStorage. Recibe como parámetro la clave (key) asociada al valor que deseas obtener. Si has almacenado un objeto o un arreglo, debes convertir el string de vuelta a su formato original usando JSON.parse().

```js
const productJSON = localStorage.getItem("product");
console.log(JSON.parse(productJSON));

const monthsJSON = localStorage.getItem("months");
console.log(JSON.parse(monthsJSON));
```

### removeItem(key)

Este método permite eliminar un elemento almacenado en el LocalStorage. Debes pasar la clave (key) asociada al elemento que deseas eliminar.

```js
localStorage.removeItem("product");
```

### clear()

El método clear elimina todos los elementos almacenados en LocalStorage, limpiando completamente el almacenamiento local.

```js
localStorage.clear();
```

### JSON.stringify(objeto)

Este método convierte un objeto o un arreglo en un string, lo cual es necesario para almacenar estructuras de datos complejas en LocalStorage.

```js
const product = {
  name: "Monitor 24 Pulgadas",
  price: 300,
};
const productString = JSON.stringify(product);
localStorage.setItem("product", productString);
```

### JSON.parse(objeto)

Este método convierte un string en un objeto o arreglo, recuperando su estructura original después de haber sido almacenado en LocalStorage.

```js
const monthsJSON = localStorage.getItem("months");
console.log(JSON.parse(monthsJSON));
```

## Fechas

Trabajar con fechas en JavaScript puede ser esencial para muchas aplicaciones, desde la gestión de eventos hasta el registro de tiempos. JavaScript proporciona el objeto `Date` para manejar fechas y horas.

### Creación de Fechas

Puedes crear una nueva fecha utilizando el constructor `Date`. Aquí hay algunas formas comunes de crear fechas:

```js
// Fecha y hora actuales
const now = new Date();
console.log(now);

// Fecha específica (año, mes, día, hora, minuto, segundo, milisegundo)
const specificDate = new Date(2023, 9, 5, 10, 30, 0); // Meses en JavaScript son 0-indexados (0 = Enero, 9 = Octubre)
console.log(specificDate);

// Fecha a partir de una cadena de texto
const dateFromString = new Date("2023-10-05T10:30:00");
console.log(dateFromString);

// Fecha a partir de un timestamp (milisegundos desde el 1 de enero de 1970)
const dateFromTimestamp = new Date(1696492200000);
console.log(dateFromTimestamp);
```

### Métodos Comunes del Objeto

El objeto Date proporciona varios métodos para obtener y establecer partes de la fecha:

```js
const date = new Date();

// Obtener partes de la fecha
console.log(date.getFullYear()); // Año
console.log(date.getMonth()); // Mes (0-11)
console.log(date.getDate()); // Día del mes (1-31)
console.log(date.getDay()); // Día de la semana (0-6, 0 = Domingo)
console.log(date.getHours()); // Hora (0-23)
console.log(date.getMinutes()); // Minutos (0-59)
console.log(date.getSeconds()); // Segundos (0-59)
console.log(date.getMilliseconds()); // Milisegundos (0-999)

// Establecer partes de la fecha
date.setFullYear(2024);
date.setMonth(11); // Diciembre
date.setDate(25);
date.setHours(12);
date.setMinutes(0);
date.setSeconds(0);
console.log(date);
```

### Formateo de Fechas

Para formatear fechas de manera más legible, puedes usar bibliotecas como moment.js

```js
const dayNow1 = new Date();
moment.locale("es");
console.log(moment().format("MMM Do YYY h:mm:ss a"));
console.log(moment().format("LLLL", dayNow1));
console.log(moment().add(3, "days").calendar());
```

## Prototypes

En JavaScript, los prototipos son una forma de herencia que permite a los objetos compartir propiedades y métodos. Cada objeto en JavaScript tiene un prototipo, que es otro objeto del cual hereda propiedades y métodos.

### Creación de Prototipos

Puedes crear prototipos de varias maneras. Aquí hay algunas formas comunes de hacerlo:

#### Funciones Constructoras

Las funciones constructoras son una forma común de crear objetos y establecer su prototipo.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person("John", 30);
john.greet(); // Hello, my name is John and I am 30 years old.
```

#### Sintaxis de Clases

La sintaxis de clases en JavaScript es una forma más moderna y clara de trabajar con prototipos.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const jane = new Person("Jane", 25);
jane.greet(); // Hello, my name is Jane and I am 25 years old.
```

### Herencia Prototipica

La herencia prototípica permite que un objeto herede propiedades y métodos de otro objeto.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

const bob = new Employee("Bob", 40, "Developer");
bob.greet(); // Hello, my name is Bob and I am 40 years old.
bob.work(); // Bob is working as a Developer.
```

### Callback

Un callback es una función que se pasa a otra función como argumento y se ejecuta luego de completarse alguna acción.

```js
let names = [];
const callback = (name) => console.log(name);
names.map(callback);

names.map((name) => console.log(name));
```
