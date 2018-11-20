import React from "react";
import "./App.css";
import Search from "./component/Search.js";
import Table from "./component/Table.js";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: ""
    };
  }
  onDismiss = id => {
    console.log("on Dismiss function called !!!");
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });
  };

  onSearchChange = event => {
    console.log("on Search function called !!!");
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm, list } = this.state;

    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange}>
            Search
          </Search>
        </div>
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
