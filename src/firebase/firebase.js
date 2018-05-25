import * as firebase from 'firebase';
import moment from 'moment';

const config = {
    apiKey: process.env.FIREBASE_AUTH_DOMAIN,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val(),
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val(),
//         });
//     });
//     console.log(expenses);  
// })

// database.ref('expenses').push({
//     description: 'Goober',
//     amount: 1095,
//     note: 'A Goober',
//     createdAt: 0
// });
// database.ref('expenses').push({
//     description: 'Bloop',
//     amount: 1295,
//     note: 'A Bloop',
//     createdAt: moment(0).subtract(4, 'day').valueOf()
// });
// database.ref('expenses').push({ 
//     description: 'Goober Bloops',
//     amount: 957,
//     note: 'A Goober Bloop',
//     createdAt: moment(0).add(4, 'day').valueOf()
// });

// database.ref('notes').push({
//     title: 'Todo again',
//     body: 'something',
// })

// database.ref('two').set({
//     name: 'Someone Else',
//     age: 32,
//     isSingle: true,
//     address: {
//         city: 'Kalamzaoo',
//         state: 'Michigan',
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((err) => {
//     console.log('Failed.');
// })

// database.ref('two').update({
//     'address/city': 'Detroit',
// })

// database.ref('one').once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => console.log(e))

// database.ref('two').on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('one').on('value', (snapshot) => {
//     const one = snapshot.val();
//     console.log(`${one.name} lives in ${one.address.city}, ${one.address.state}`);
// });