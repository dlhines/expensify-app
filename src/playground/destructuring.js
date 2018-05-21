// const person = {
//     // name: 'Daniel',
//     age: '42',
//     location: {
//         city: 'Home',
//         temperature: 'freaking hot!'
//     }
// }

// const { name: named = 'Not Daniel'} = person;
// console.log(named);

const book = {
    title: 'Some Book',
    author: 'Ted Someone',
    publisher: {
        name: 'Some Publisher'
    }
}

const { name: publisherName = 'Some other Publisher' } = book.publisher;

console.log(publisherName);