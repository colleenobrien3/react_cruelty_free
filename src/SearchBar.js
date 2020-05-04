import React, { Component, Redirect } from "react";
import "./SearchBar.css";
import { Route, BrowserRouter, Switch, withRouter } from "react-router-dom";
import Yes from "./Yes";
import No from "./No";

class Candidate extends Component {
  constructor(name, confidence) {
    super(name, confidence);
    this.name = name;
    this.confidence = confidence;
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      all: [],
      options: null,
      typing: null,
      checked: false,
      history: props.history,
    };
  }

  autoComplete = (e) => {
    let possibilities = [];
    console.log(e.target.value);
    console.log(this.state.all);
    if (!e.target.value) {
      this.setState({ value: [] });
    } else {
      this.state.all.forEach((item) => {
        if (item.name.includes(e.target.value)) {
          console.log("yes");
          possibilities.push(item.name);
        }
      });
      this.setState({ value: possibilities });
      this.setState({ options: e.target.value });
    }
  };

  // if (this.state.checked === false) {
  //   this.props.history.push("/crueltyFull");
  // }

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(e.value);
  //     let data = JSON.stringify({ name: this.state.options });
  //     fetch("http://localhost:8000/candidates", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: data,
  //     })
  //       .then((response) => response.json())
  //       .catch((err) => console.error("Caught error:", err));
  //   };

  render() {
    // let list = this.state.value;
    // let used = [];
    // let newList = [];
    // list.forEach((item) => {
    //   if (!used.includes(item)) {
    //     let counter = 0;
    //     list.forEach((piece) => {
    //       if (item === piece) {
    //         counter++;
    //       }
    //     });
    //     let candidate = new Candidate(item, counter);
    //     newList.push(candidate);
    //     used.push(item);
    //   }
    // });
    // let sortedList = newList.sort((a, b) =>
    //   b.confidence > a.confidence ? 1 : -1
    // );
    // console.log(sortedList);
    // let listTwo = sortedList.map((item) => {
    //   return <div className="suggestion">{item.name}</div>;
    // });

    return (
      <div className="searchBar">
        <header className="searchBar-header"></header>
        <main>
          <form onSubmit={this.props.onSubmit.bind(this)}>
            <input onChange={this.props.typing.bind(this)}></input>
            {/* <input onChange={this.autoComplete}></input> */}
            {/* <div className="dropDown">{listTwo}</div> */}
            <button>Search</button>
          </form>
        </main>
        {/* <BrowserRouter>
          <Route path="/crueltyFree" exact component={Yes} />
          <Route path="/crueltyFull" exact component={No} />
        </BrowserRouter> */}
      </div>
    );
  }
}

export default SearchBar;
