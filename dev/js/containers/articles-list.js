import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectArticle, clearStates} from "../actions/index";

class ArticlesList extends Component {

    handleItem(event){
        var found = false;
        this.props.articles.map((article =>{
            if (article.title == event){
                this.props.getArticleBody(article);
                found = true;
            }
        }))
        if (!found) { this.props.getArticleBody([]); }
    }

    createListItems() {

        return this.props.articles.map((article => {
            return (
                <option key={article.id} id={article.id}>
                    {article.title}
                </option>
            );
        }));
    }

    render() {
        try {
            if (this.props.articles.length > 0) {
                return (
                    <div>
                        <button onClick={this.props.clearAll}>Clear Article View</button>
                        <select onChange={e => this.handleItem(e.target.value)}>
                            <optgroup label="Select from bellow">
                                {this.createListItems()}
                            </optgroup>
                        </select>
                    </div>
                );
            } else {
                return (
                    <h1>Loading...</h1>
                );
            }
        } catch (err){
            return (<h1>Error loading articles</h1>);
        }
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getArticleBody: selectArticle, clearAll: clearStates}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticlesList)