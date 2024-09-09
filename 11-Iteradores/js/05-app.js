let i = 0;

do {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(` ${i} Fizz Buzz`);
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
    i++;
} while (i < 10);
