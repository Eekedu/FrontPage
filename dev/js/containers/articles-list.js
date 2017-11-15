import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectArticle, clearStates} from "../actions/index";

class ArticlesList extends Component {

    constructor() {
        super();

        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick(e){
        if (this.node.contains(e.target)){
            return;
        }
        this.props.clearArticleBody();
    }

    createListItems() {
        if (this.props.articles !== []) {
            return this.props.articles.map((article => {
                return (
                    <option key={article.id} id={article.id}
                            onClick={() => this.props.getArticleBody(article)}>
                        {article.title}
                    </option>
                );
            }));
        } else {
            return (
                <h1>Loading...</h1>
            );
        }
    }

    render() {
        return (
            <div>
                <select size="5" ref={node => {this.node = node}}>
                    {this.createListItems()}
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getArticleBody: selectArticle, clearArticleBody: clearStates}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticlesList)