import React from "react";
import Title from "../Title/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

// { props }
function SearchForm({ search, handleFormSubmit, handleInputChange }) {
  return (
    // form
    <form>
      <div className="form-group">
        <Title />
        <label className="monospace">
          Click heading arrows to sort, or narrow results with the searchbox.
        </label>
        <div className="inputContainer">
          <input
            // {search} handles the search value
            value={search}
            onChange={handleInputChange}
            name="search"
            type="search"
            className="Field"
            placeholder="Search"
            id="search"
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
