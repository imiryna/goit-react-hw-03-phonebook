import React, { Component } from 'react';
import { ContactListCss, Items, ButtonCss } from './contactList.styled';

export class ContactList extends Component {
  handleOnClick = e => {
    this.props.removeById(e.target.id);
  };

  render() {
    return (
      <div>
        <ContactListCss>
          {this.props.contacts.map(item => (
            <Items key={item.id}>
              {item.name}: {item.number}
              <ButtonCss
                id={item.id}
                type="button"
                onClick={this.handleOnClick}
              >
                Delete
              </ButtonCss>
            </Items>
          ))}
        </ContactListCss>
      </div>
    );
  }
}
