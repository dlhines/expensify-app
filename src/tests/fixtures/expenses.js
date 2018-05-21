import moment from 'moment';

export default [{
    id: '1',
    description: 'Goober',
    amount: 1095,
    note: 'A Goober',
    createdAt: 0
},{
    id: '2',
    description: 'Bloop',
    amount: 1295,
    note: 'A Bloop',
    createdAt: moment(0).subtract(4, 'day').valueOf()
},{ 
    id: '3',
    description: 'Goober Bloops',
    amount: 957,
    note: 'A Goober Bloop',
    createdAt: moment(0).add(4, 'day').valueOf()
}];