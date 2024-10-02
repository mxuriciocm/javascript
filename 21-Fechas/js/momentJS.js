const dayNow1 = new Date();
moment.locale('es');

console.log(moment().format('MMM Do YYY h:mm:ss a'));

console.log(moment().format('LLLL', dayNow1));

console.log(moment().add(3, 'days').calendar())