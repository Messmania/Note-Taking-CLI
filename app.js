// const fs = require('fs')
// // fs.writeFileSync('notes.txt', 'This is the file created by Node.js!');

// fs.appendFileSync('notes.txt', ' This is challenge1 completed.')

// const name = require("./utils.js")
// console.log(name)

// const func = require('./notes');
// console.log(func());

// const validator = require("validator")
// console.log(validator.isEmail('monika@foxmail.com'))
// console.log(validator.isEmail('monikafoxmail.com'))
// console.log(validator.isURL('www/monikafoxmail.com'))
// console.log(validator.isURL('https://monikafoxmail.com'))

// const chalk = require("chalk")
// console.log(chalk.green("Success!"), chalk.underline("I am new here"));
// console.log(chalk.white(`I am ${chalk.inverse('bold')}`))
// console.log(chalk.blue.italic('Tedha h par mera h- Kurkure'))

//--Command line args
// console.log(process.argv)

const notes = require("./notes.js")
const yargs = require("yargs");
yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            type: 'string',
            demandOption: true
        },
        body: {
            describe: 'contents of the note',
            type: 'string',
            demandOption: true
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'read',
    describe: 'Shows a note',
    builder: {
        title: {
            describe: 'title of the note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler: () => {
        notes.listNotes();
    }
})


yargs.parse();
// console.log(yargs.argv);

