import { SET_PAGE } from './actions';

function blog(state = {}, action) {
    switch (action.type) {
    case SET_PAGE:
        return {
            pageKey: action.page.value
        };
    default:
        return state;
    }
}

export default blog;
