const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// concat
const resultado = meses.concat(meses2, meses3);

console.log(resultado);

// spreat operator
const resultado2 = [...meses, ...meses2, ...meses3];