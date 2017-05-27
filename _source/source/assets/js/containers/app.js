import React from 'react';
import { connect } from 'react-redux';
import { setPage } from '../actions';
import BlogIndex from '../components/BlogIndex';
import blogIndex from './../../../../source/content/blogIndex.js';

window.blogIndex = blogIndex;
class App extends React.Component {
    render() {

        const { dispatch, page } = this.props;

        let pageContent = blogIndex[page];
        
        let pageNode = pageContent ? (
            <div className="content">
                <h4>{pageContent.title}</h4>
                <div dangerouslySetInnerHTML={{__html: pageContent.__content}} />
                <p>{pageContent.slug}</p>
            </div>
        ) : null;

        return (
            <div>
                <div className="header">
                <div className="header-nav">
                    <h3>Docunext</h3>
                    <BlogIndex onBlogEntryClick={slug => dispatch(setPage(slug))} />
                </div>
                </div>
                {pageNode}
            </div>
        );
    }
}

function select(state) {
    var selectedPage;
    if(state.pageKey) {
        window.state = state;
        var myIndex = state.length - 1;
        selectedPage = state.pageKey;
    }
    return {
        page: selectedPage || Object.keys(blogIndex)[0]
    };
}

export default connect(select)(App);
