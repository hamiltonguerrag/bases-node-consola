const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'listar o no la tabla de multiplicar',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'hasta donde quiero multiplicar',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw ' la base debe ser un numero'
    }
    if (isNaN(argv.h)) {
      throw "la variable 'hasta' debe ser numerica"
    }
    return true
  }).argv

module.exports = argv
