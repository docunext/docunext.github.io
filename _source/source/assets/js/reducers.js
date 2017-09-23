import { SET_PAGE } from './actions';
import { browserHistory } from 'react-router'


function blog(state = {}, action) {

    switch (action.type) {
    case SET_PAGE:
      let newpage = action.page.value.replace('__', '/');
      browserHistory.push(newpage);
    default:
        return state;
    }
}

export default blog;
