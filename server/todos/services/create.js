import {TODO} from '../models/index';

export default (text, completed, userId) => {
    let newTODO = new TODO({
        text,
        completed,
        userId
    });
    return newTODO.save();
};