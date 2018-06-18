var mongoose = require('mongoose');
//make as connection

mongoose.connect('mongodb://localhost:27017/tutorial');
//get a reference to database
var db = mongoose.Collection();

db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connection successful');

    // define Schema
    var BookSchema = mongoose.Schema({
        name: String,
        price: Number,
        quantity: Number
    });

    // compile schema to model
    var Book = mongoose.model('Book', BookSchema, 'bookstore');

    // documents array
    var books = [{ name: 'Mongoose Tutorial', price: 10, quantity: 25 },
    { name: 'NodeJS tutorial', price: 15, quantity: 5 },
    { name: 'MongoDB Tutorial', price: 20, quantity: 2 }];

    // save multiple documents to the collection referenced by Book Model
    Book.collection.insert(books, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Multiple documents inserted to Collection");
        }
    });
});
