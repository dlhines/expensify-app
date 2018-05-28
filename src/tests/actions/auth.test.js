import {login, logout} from '../../actions/auth';


test('should call login action', () => {
    const action = login('testuid');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'testuid',
    });
});

test('should call logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});