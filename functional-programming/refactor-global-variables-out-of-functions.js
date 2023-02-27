// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
    return [...bookList, bookName];
}
// Change code above this line

// Change code below this line
function remove(bookList, bookName) {
   const bookListCopy = [...bookList];
   const bookNameIndex = bookList.indexOf(bookName);

    if (bookNameIndex >= 0) {
        bookListCopy.splice(bookNameIndex, 1);
    }
    return bookListCopy;
}
// Change code above this line

add(bookList, "A Brief History of Time");
remove(bookList, "On The Electrodynamics of Moving Bodies");
