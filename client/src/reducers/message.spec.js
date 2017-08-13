import reducer from './message';
import {SET_MESSAGE} from '../constants/actionTypes';

describe('message reducer', () => {

    it('should check SET_MESSAGE action', () => {
        expect(
            reducer([], {
                type: SET_MESSAGE,
                open: true,
                message: 'This is test message'
            })
        ).toEqual(
            {
                open: true,
                message: 'This is test message'
            }
        );

        expect(
            reducer([], {
                type: SET_MESSAGE,
                open: false,
                message: 'This is test message'
            })
        ).toEqual(
            {
                open: false,
                message: 'This is test message'
            }
        );
    });
});