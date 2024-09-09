for (let i = 0; i < 10; i++) {
    if (i === 5){
        console.log('Este es el número 5');
        break;
    }
    console.log(`Número: ${i}`);
}


for (let i = 0; i < 10; i++) {
    if (i === 5){
        console.log('CINCO');
        continue;
    }
    console.log(`Número: ${i}`);
}
