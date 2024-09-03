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
let str1 = 'Hola';
let str2 = 'Mundo';
let resultado = str1.concat(' ', str2); // "Hola Mundo"
```

`+:` El operador `+` es una forma común de unir strings.
```js
let saludo = 'Hola' + ' ' + 'Mundo'; // "Hola Mundo"
```

`'${}':` Esta es la forma más óptima y moderna de concatenar strings, especialmente cuando necesitas incluir variables o expresiones. Utiliza backticks `(``)` en lugar de comillas.
```js
let nombre = 'Mundo';
let saludo = `Hola ${nombre}`; // "Hola Mundo"
```


### Métodos de Strings

JavaScript proporciona varios métodos útiles para trabajar con strings:

`lenght:` La propiedad length te permite saber el número de caracteres en un string.
```js
let texto = 'JavaScript';
let longitud = texto.length; // 10
```

`includes(string):` Devuelve un valor booleano (true o false) que indica si un string contiene el valor especificado.
```js
let frase = 'Aprender JavaScript es divertido';
let contienePalabra = frase.includes('JavaScript'); // true
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