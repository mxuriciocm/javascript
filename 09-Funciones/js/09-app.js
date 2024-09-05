// Añadir funciones a un objeto

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    }
}

reproductor.reproducir(30);
