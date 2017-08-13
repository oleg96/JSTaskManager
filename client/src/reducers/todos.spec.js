import reducer from './todos';
import {ADD_TODO_SUCCESS} from '../constants/actionTypes';
import {GET_TODOS_SUCCESS} from '../constants/actionTypes';
import {UPDATE_TODO_SUCCESS} from '../constants/actionTypes';
import {COMPLETE_TODO_SUCCESS} from '../constants/actionTypes';
import {COMPLETE_ALL_TODOS_SUCCESS} from '../constants/actionTypes';
import {REMOVE_TODO_SUCCESS} from '../constants/actionTypes';
import {REMOVE_COMPLETED_TODOS_SUCCESS} from '../constants/actionTypes';

describe('todos reducer', () => {

    it('should check ADD_TODO_SUCCESS action', () => {
        expect(
            reducer([], {
                type: ADD_TODO_SUCCESS,
                id: '3693',
                text: 'This is test todo',
                completed: false
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo',
                completed: false
            }
        ]);
    });

    it('should check GET_TODOS_SUCCESS action', () => {
        expect(
            reducer([], {
                type: GET_TODOS_SUCCESS,
                todos: [
                    {
                        _id: '1',
                        text: 'This is test todo',
                        completed: false
                    },
                    {
                        _id: '2',
                        text: 'This is test todo 2',
                        completed: true
                    }
                ]
            })
        ).toEqual([
            {
                _id: '1',
                id: '1',
                text: 'This is test todo',
                completed: false
            },
            {
                _id: '2',
                id: '2',
                text: 'This is test todo 2',
                completed: true
            }
        ]);
    });

    it('should check UPDATE_TODO_SUCCESS action', () => {
        expect(
            reducer([
                {
                    id: '3693',
                    text: 'This is test todo',
                    completed: false
                }
            ], {
                type: UPDATE_TODO_SUCCESS,
                id: '3693',
                text: 'This is test todo update'
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo update',
                completed: false
            }
        ]);
    });

    it('should check COMPLETE_TODO_SUCCESS action', () => {
        expect(
            reducer([
                {
                    id: '3693',
                    text: 'This is test todo',
                    completed: false
                }
            ], {
                type: COMPLETE_TODO_SUCCESS,
                id: '3693'
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo',
                completed: true
            }
        ]);
    });

    it('should check COMPLETE_ALL_TODOS_SUCCESS action', () => {
        expect(
            reducer([
                {
                    id: '3693',
                    text: 'This is test todo',
                    completed: false
                },
                {
                    id: '36936',
                    text: 'This is test todo 2',
                    completed: false
                }
            ], {
                type: COMPLETE_ALL_TODOS_SUCCESS
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo',
                completed: true
            },
            {
                id: '36936',
                text: 'This is test todo 2',
                completed: true
            }
        ]);
    });

    it('should check REMOVE_TODO_SUCCESS action', () => {
        expect(
            reducer([
                {
                    id: '3693',
                    text: 'This is test todo',
                    completed: false
                },
                {
                    id: '36936',
                    text: 'This is test todo 2',
                    completed: false
                }
            ], {
                type: REMOVE_TODO_SUCCESS,
                id: '36936'
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo',
                completed: false
            }
        ]);
    });

    it('should check REMOVE_COMPLETED_TODOS_SUCCESS action', () => {
        expect(
            reducer([
                {
                    id: '3693',
                    text: 'This is test todo',
                    completed: false
                },
                {
                    id: '36936',
                    text: 'This is test todo 2',
                    completed: true
                }
            ], {
                type: REMOVE_COMPLETED_TODOS_SUCCESS
            })
        ).toEqual([
            {
                id: '3693',
                text: 'This is test todo',
                completed: false
            }
        ]);
    });
});