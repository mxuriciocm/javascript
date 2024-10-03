const client = {
    name: 'Mauricio',
    age: 19
}

console.log(client)
console.log(typeof client);

function Client(name, age){
    this.name = name;
    this.age = age;
}

const mauricio = new Client('Mauricio', 19)

console.log(mauricio)