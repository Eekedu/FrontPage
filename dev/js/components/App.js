import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from "../containers/user-detail";
import ArticleList from '../containers/articles-list';
import ArticleDetail from '../containers/article-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User list:</h2>
        <UserList/>
        <hr />
        <h2>User Details:</h2>
        <UserDetail/>
        <h2>Articles:</h2>
        <ArticleList />
        <ArticleDetail/>
    </div>
);

export default App;