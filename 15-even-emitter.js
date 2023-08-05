const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',() =>{
    console.log('data received')

})

customEmitter.on('conection',(name,id) =>{
    console.log(`${name} ${id} `)

})

customEmitter.emit('conection','john',25)