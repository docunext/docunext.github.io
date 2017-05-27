export const SET_PAGE = 'SET_PAGE';

export const setPage = function(page) {
    console.log(page);
    return { type: SET_PAGE, page: page };
};
