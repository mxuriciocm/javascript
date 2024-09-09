const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
}

// Iterating over the object using for...in
for (let propiedad in automovil) {
    console.log(`${automovil[propiedad]}`);
}

// Iterating over the object using Object.entries

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(`${llave}: ${valor}`);
}