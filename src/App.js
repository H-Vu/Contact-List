import React from "react";
import faker from "faker";

import SearchBar from "./Components/SearchBar";
import Contacts from "./Components/Contacts";
import "./App.css";

class App extends React.Component {
  state = {
    contacts: [],
    newContacts: [],
  };

  componentDidMount() {
    let arr = [];

    for (let i = 0; i < 50; i++) {
      let name = faker.name.firstName() + " " + faker.name.lastName();
      let email = faker.internet.email();
      arr.push({ name: name, email: email, id: i });
    }

    console.log(arr);

    this.setState({
      contacts: arr,
    });
  }

  textHandle = (text) => {
    this.searchHandle(text);
  };

  searchHandle = (text) => {
    const newContacts = this.state.contacts.filter((contact) => {
      if (
        contact.name.toLowerCase().includes(text.toLowerCase()) ||
        contact.email.toLowerCase().includes(text.toLowerCase())
      ) {
        return contact;
      }
    });

    if (text === "") {
      this.setState({
        newContacts: [],
      });
    } else {
      this.setState({
        newContacts,
      });
    }
  };

  render() {
    return (
      <div className="">
        <SearchBar textHandle={this.textHandle} value={this.state.text} />

        {this.state.newContacts.length === 0 ? (
          <Contacts contacts={this.state.contacts} />
        ) : (
          <Contacts contacts={this.state.newContacts} />
        )}
      </div>
    );
  }
}

export default App;
