const colors = require('colors')

const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./helpers/yargs')

console.clear()
console.log(argv.b)

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(`se ha creado el archivo ${colors.green(nombreArchivo)} creado`)
  )
  .catch(console.error)
