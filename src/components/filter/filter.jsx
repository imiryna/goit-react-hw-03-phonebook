import React, { Component } from 'react';
import { FilterCont, Label, Input } from './filter.styled';

export class Filter extends Component {
  handleInputFilter = e => {
    const filterExpression = e.target.value;
    let filterData;
    console.log(e.target.value);
    if (filterExpression.length < 3) {
      filterData = this.props.contactData;
    }
    console.log(this.props.contactData);
    filterData = this.props.contactData.filter(item =>
      item.name.toLowerCase().includes(filterExpression)
    );
    this.props.storeFiltered(filterData);
  };
  render() {
    return (
      <FilterCont>
        <Label>
          Find contacts by name
          <Input type="text" onChange={this.handleInputFilter} />
        </Label>
      </FilterCont>
    );
  }
}
