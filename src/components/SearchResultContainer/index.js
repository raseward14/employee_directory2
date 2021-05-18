import React, { Component } from "react";
import SearchForm from "../SearchForm/index";
import ResultList from "../Results/index";
import "./style.css";
import API from "../../utils/API";

class SearchResultContainer extends Component {
  state = {
    // search
    search: "",
    // results
    results: [],
    // sorted name
    sort: "DESC",
  };

  // component did mount calls searchEmployees
  componentDidMount() {
    this.searchEmployees("");
  }

  // method to searchEmployees randomly
  searchEmployees = (query) => {
    // API.search(query) goes here
    API.search(query)
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };

  // handleSubmit to call searchUsers with event
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  // search based on Name, phone, email, DOB
  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const search = event.target.value.toLowerCase();
      this.setState({
          search: search
      })
  }
  };

  // sort by first name
  sortByName = () => {
    const alphabetizedResults = this.state.results.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
  });

  if (this.state.sort === "DESC") {
      alphabetizedResults.reverse();
      this.setState({ sort: "ASC" });
  } else {
      this.setState({ sort: "DESC" });
  }
  this.setState({ results: alphabetizedResults })
  };

  // sort by email
  sortByEmail = () => {
    let emailResults = this.state.results.sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    });
    this.state.sort === "DESC"
      ? emailResults.reverse() && this.setState({ sort: "ASC" })
      : this.setState({ sort: "DESC" });
    this.setState({ results: emailResults });
  };

  // sort by phone
  sortByPhone = () => {
    let phoneResults = this.state.results.sort((a, b) => {
      return parseInt(a.phone.trim().replace(/-()/), "") -
        parseInt(b.phone.trim().replace(/-()/), "")
        ? 1
        : -1;
    });
    this.setState({ results: phoneResults });
  };

  // sort by DOB
  sortByDOB = () => {
    let DOBResults = this.state.results.sort((a, b) => {
      return a.dob > b.dob ? 1 : -1;
    });
    this.setState({ results: DOBResults });
  };

  // render()
  render() {
    // return div
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          search={this.state.search}
          results={this.state.results}
          sortByName={this.sortByName}
          sortByEmail={this.sortByEmail}
          sortByPhone={this.sortByPhone}
          sortByDOB={this.sortByDOB}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
