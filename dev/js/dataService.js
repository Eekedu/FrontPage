import request from 'superagent';

const getApiGenerator = next => (route, name) => request
    .get(route)
    .end((err,res) =>{
        if (err) {
            return next ({
                type: name + '_ERROR',
                err
            });
        }
        const data = JSON.parse(res.text);
        next({
            type: name + '_RECEIVED',
            data
        });
    });

const dataService = store => next => action => {

    next(action);
    const getApi = getApiGenerator(next);
    switch (action.type){
        case 'GET_ARTICLE_DATA':
            getApi('http://eekedu.ca/api/articles', 'GET_ARTICLE_DATA');
            break;
        default:
            break;
    }

};

export default dataService