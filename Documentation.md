## Variables

En JavaScript hay 3 tipos de variables que se puede usar: `var`, `let` y `const`. Cada una tiene sus propias características y reglas de uso.

`var:`

- Alcance: El alcance está limitado a la función en la que se declara, o al contexto global si se declara fuera de una función. No respeta el alcance de bloque.
- Reasignación: Puedes reasignar una variable declarada con var tantas veces como necesites.
- Inicialización: Las variables declaradas con var pueden ser inicializadas después de su declaración, aunque su valor inicial será undefined hasta que se les asigne un valor.

`let:`

- Alcance: Tiene un alcance de bloque, lo que significa que solo es accesible dentro del bloque de código en el que se declara (por ejemplo, dentro de {}).
- Reasignación: Similar a var, las variables pueden ser reasignadas.
- Inicialización: Puedes declarar una variable con let sin inicializarla. Su valor inicial será undefined hasta que le asignes un valor.

`const:`

- Alcance: Tiene un alcance de bloque, al igual que let.
- Reasignación: Una vez que se asigna un valor, no puede ser reasignado. Sin embargo, si la variable contiene un objeto o un array, las propiedades del objeto o los elementos del array pueden ser modificados.
- Inicialización: Deben ser inicializadas al momento de su declaración; de lo contrario, se lanzará un error.

## Strings

En JavaScript, un string es una secuencia de caracteres utilizada para representar texto. Hay varias formas de crear un string:

- Comillas simples ('')
- Comillas dobles ("")
- Template literals (`${}`) que permiten incluir expresiones y variables de manera más flexible.

### Concatenar Strings

Hay diversas maneras de concatenar strings en JavaScript:

`concat(string):` Este método permite unir dos o más strings y devuelve un nuevo string.

```js
let str1 = "Hola";
let str2 = "Mundo";
let resultado = str1.concat(" ", str2); // "Hola Mundo"
```

`+:` El operador `+` es una forma común de unir strings.

```js
let saludo = "Hola" + " " + "Mundo"; // "Hola Mundo"
```

`'${}':` Esta es la forma más óptima y moderna de concatenar strings, especialmente cuando necesitas incluir variables o expresiones. Utiliza backticks ` (``) ` en lugar de comillas.

```js
let nombre = "Mundo";
let saludo = `Hola ${nombre}`; // "Hola Mundo"
```

### Métodos de Strings

JavaScript proporciona varios métodos útiles para trabajar con strings:

`lenght:` La propiedad length te permite saber el número de caracteres en un string.

```js
let texto = "JavaScript";
let longitud = texto.length; // 10
```

`includes(string):` Devuelve un valor booleano (true o false) que indica si un string contiene el valor especificado.

```js
let frase = "Aprender JavaScript es divertido";
let contienePalabra = frase.includes("JavaScript"); // true
```

`trimStart()`: Elimina los espacios en blanco al inicio del string.

```js
let texto = "   Hola";
console.log(texto.trimStart()); // "Hola"
```

`trimEnd()`: Elimina los espacios en blanco al final del string.

```js
let texto = "Hola   ";
console.log(texto.trimEnd()); // "Hola"
```

`trim()`: Elimina los espacios en blanco tanto al inicio como al final del string.

```js
let texto = "   Hola   ";
console.log(texto.trim()); // "Hola"
```

`replace(searchValue, newValue):` Reemplaza una parte del string por otra..

```js
let texto = "Hola Mundo";
console.log(texto.replace("Mundo", "Amigo")); // "Hola Amigo"
```

`slice(start, end):` Extrae una sección del string y devuelve una nueva cadena sin modificar la original.

```js
let texto = "Hola Mundo";
console.log(texto.slice(0, 4)); // "Hola"
```

`substring(start, end):` Similar a slice(), pero intercambia los valores si el índice inicial es mayor que el final, evitando errores.

```js
let texto = "Hola Mundo";
console.log(texto.substring(4, 0)); // "Hola"
```

`repeat(count):` Repite el string un número específico de veces.

```js
let texto = "Hola";
console.log(texto.repeat(3)); // "HolaHolaHola"
```

`split(separator):` Divide un string en un array de substrings usando un separador especificado.

```js
let texto = "Hola Mundo";
console.log(texto.split(" ")); // ["Hola", "Mundo"]
```

`toLowerCase():` Convierte todos los caracteres del string a minúsculas..

```js
let texto = "Hola Mundo";
console.log(texto.toLowerCase()); // "hola mundo"
```

`toUpperCase():` Convierte todos los caracteres del string a mayúsculas.

```js
let texto = "Hola Mundo";
console.log(texto.toUpperCase()); // "HOLA MUNDO"
```

`toString():` Convierte un valor en un string.

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

## Booleans

Un valor booleano es un tipo de dato en JavaScript que solo puede tener dos posibles valores: true o false. Los booleans se utilizan comúnmente para representar estados binarios (encendido/apagado, verdadero/falso) y para el control de flujo en condiciones.

- Creación de Booleans: Puedes crear booleans directamente asignando los valores true o false a una variable.

```js
let esVerdadero = true;
let esFalso = false;
```

- Comparación de Booleans: Los valores booleanos se utilizan en comparaciones para evaluar expresiones y determinar si una condición es verdadera o falsa.

## Objetos

Los objetos son una estructura fundamental en JavaScript que permite almacenar múltiples valores en una única entidad. Estos valores se representan como pares clave-valor.

### Creacion de objetos

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

### Agregar y eliminar objetos

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

### Object destructuring

La desestructuración de objetos permite extraer propiedades en variables individuales de manera más concisa.

```js
const { nombre, edad, apellido } = producto;
console.log(edad); // 19
```

### Objetos anidados

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

#### Desestructuración de Objetos Anidados:

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
