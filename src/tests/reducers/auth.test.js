import authReducer from '../../reducers/auth';

test('call login reducer' , () => {
    const action = {
        type: 'LOGIN',
        uid: '123qwe',
    }
    const state = authReducer(undefined, action)
    expect(state).toEqual(action);
});

test('should logout', () => {
    const state = authReducer(undefined, action)
    expect(state).toEqual({type:'LOGOUT'});
})

