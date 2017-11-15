import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArticleDetail extends Component {

    render() {
        if (!this.props.articleBody){
            return (<h3>Select a article...</h3>);
        }
        return (
            <div>
                <h3 id="article">{this.props.articleBody.body}</h3>
            </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        articleBody: state.selectedArticle
    };
}

export default connect(mapStateToProps)(ArticleDetail);