const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    debugger;
    const notes = loadNotes();
    // const dups = notes.filter((n) => n.title === title);
    const dups = notes.find((n) => n.title === title);

    if (dups) {
        console.log("Title already exists")
    } else {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log("New note added!");
    }

}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync("notes.json");
        return JSON.parse(data.toString());
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((n) => n.title !== title);
    if (notes.length === notesToKeep.length) {
        console.log(chalk.green.inverse("Note not found!"))
    } else {
        saveNotes(notesToKeep);
        console.log(chalk.red.inverse("Note deleted!"))
    }
}

const listNotes = () => {
    console.log('Your notes...');
    const notes = loadNotes();
    notes.forEach(n => {
        console.log("Title:", n.title, "\nBody:", n.body);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const found = notes.find((n) => n.title === title);
    if (found) {
        console.log(chalk.italic(found.title) + " : " + chalk.green(found.body))
    } else {
        console.log(chalk.red("No note found for the given title!"))
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}