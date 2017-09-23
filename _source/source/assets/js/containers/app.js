import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import { setPage } from '../actions';
import BlogIndex from '../components/BlogIndex';
import blogIndex from './../../../../source/content/blogIndex.js';

window.blogIndex = blogIndex;
class App extends React.Component {
    constructor(props) {
      super(props);
    }
    selectPage(page) {
      console.log(page);
      let newpage = page.value.replace('__', '');
      hashHistory.push(newpage);
    }
    render() {
        const { dispatch, page, params } = this.props;
        console.log(params);
        let mypage = ('__' + (params.slug || Object.keys(blogIndex)[0])).replace('____', '__');

        let pageContent = blogIndex[mypage];
        pageContent.slug = mypage;
        
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
                    <BlogIndex onBlogEntryClick={this.selectPage} />
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
    //browserHistory.push('/some/path')
    return {
        page: selectedPage || Object.keys(blogIndex)[0]
    };
}

export default connect(select)(App);
