import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class BlogEntry extends React.Component {
    render() {
        return (
            <option>
                {this.props.text}
            </option>
        );
    }
}

BlogEntry.propTypes = {
    text: PropTypes.string.isRequired
};
