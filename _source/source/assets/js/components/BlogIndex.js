import React from 'react';
import PropTypes from 'prop-types';
import BlogEntry from './BlogEntry';
import Select from 'react-select';
import _ from 'lodash';
import blogIndex from './../../../../source/content/blogIndex.js';
import { connect } from 'react-redux'

const options = _.map(blogIndex, (entry, key) => {
    return {
        value: key,
        label: (entry.title.length > 40 ? entry.title.slice(0, 40) + '...' : entry.title)
    };
});

class BlogIndex extends React.Component {
    render() {

        return (
            <div className="page-select">
                <Select onChange={this.props.onBlogEntryClick} options={options}
                    name="form-field-name" />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  let pageKey = state.pageKey || '';
  return {
      pageKey
  };
}
BlogIndex.propTypes = {
    onBlogEntryClick: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(BlogIndex);
