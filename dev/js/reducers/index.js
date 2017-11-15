import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ArticlesReducer from './reducer-articles';
import ActiveArticleReducer from './reducer-active-article';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    articles: ArticlesReducer,
    selectedArticle: ActiveArticleReducer,
});

export default allReducers;