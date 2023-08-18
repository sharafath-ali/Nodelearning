const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const fs = require("fs");
const path = require("path");

// Load the docx file as binary content
const content = fs.readFileSync(
    path.resolve(__dirname, "input.docx"),
    "binary"
);

const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

// Render the document (Replace {first_name} by John, {last_name} by Doe, ...)
doc.render({
    name: "John",
    //conditional rendering
    "hasKitty": true,
    "kitty": "Minie",
    "hasDog": false,
    "dog": null,
    "hasDog": true,
    "dog": 'rose',
    //Loops
    "products": [
        { name: "Windows", price: 1000 },
        { name: "Mac OSX", price: 4000 },
        { name: "Ubuntu", price: 0 }
    ],

    "product": [
        "Windows",
        "Mac OSX",
        "Ubuntu",
    ],
    
});


const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});

// buf is a nodejs Buffer, you can either write it to a
// file or res.send it with express for example.
fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);