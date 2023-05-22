import React, { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  handleSearchChange = (event) => {
    this.props.onChangeHandler(event);
  }

  render() {
    return (
      <input
        className={'search-box ${this.props.className}'}
        type='search'
        placeholder={this.props.placeholder}
        onChange={this.handleSearchChange}
      />
    );
  }
}

export default SearchBox;
