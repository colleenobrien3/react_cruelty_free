import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch,
  withRouter,
} from "react-router-dom";
import { Router } from "react-router";
import logo from "./logo.svg";
import SearchBar from "./SearchBar";
import "./App.css";
import Header from "./Header";
import Splash from "./Splash";
import Yes from "./Yes";
import No from "./No";
import Welcome from "./Welcome";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      value: [],
      all: [],
      options: null,
      typing: null,
      checked: false,
    };
    this.onSubmit.bind(this);
  }
  typing = (e) => {
    this.setState({ typing: e.target.value });
    console.log(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    let bank = [];
    console.log(e.value);
    console.log(this.state.typing);
    let data = JSON.stringify({ name: this.state.typing });
    fetch("https://arcane-brook-10088.herokuapp.com/candidates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .catch((err) => console.error("Caught error:", err));
    for (let i = 0; i < this.state.all.length; i++) {
      if (this.state.all[i].name === this.state.typing) {
        console.log("yes");
        console.log(this.props.history);
        // this.history.push("/crueltyFree");
        this.setState({ checked: true });
        bank.push(this.state.all[i].name);
        console.log(bank);
      }
    }
    if (bank.length > 0) {
      this.history.push("/crueltyFree");
    } else {
      this.history.push("/crueltyFull");
    }
  };
  componentDidMount() {
    let names = [];
    let named = null;
    fetch("https://arcane-brook-10088.herokuapp.com/companies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        named = res;
        console.log(named);
        named.forEach((item) => {
          names.push(item);
        });
        console.log(names);
        this.setState({ all: names });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    console.log(this.history);
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <Header />
        <SearchBar
          {...this.history}
          typing={this.typing.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
        <Router history={this.history}>
          <Route path="/" exact component={Welcome} />
          <Route path="/crueltyFree" exact component={Yes} />
          <Route path="/crueltyFull" exact component={No} />
        </Router>
      </div>
    );
  }
}

export default App;
