import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function SearchResults(props) {
  return (
    <table className="list-group">
      <tbody>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">
            Name
            <FontAwesomeIcon
              className="pointer"
              icon={faCaretDown}
              onClick={props.sortByName}
            />
          </th>
          <th scope="col">
            Phone
            <FontAwesomeIcon
              className="pointer"
              icon={faCaretDown}
              onClick={props.sortByPhone}
            />
          </th>
          <th scope="col">
            Email
            <FontAwesomeIcon
              className="pointer"
              icon={faCaretDown}
              onClick={props.sortByEmail}
            />
          </th>
          <th scope="col">
            DOB
            <FontAwesomeIcon
              className="pointer"
              icon={faCaretDown}
              onClick={props.sortByDOB}
            />
          </th>
        </tr>
        {props.results && props.results.map((result, index) =>
          result.name.first.toLowerCase().includes(props.search) ? (
            <tr className="table-row" key={index}>
              <td>
                <img
                  alt={result.name.first}
                  className="img-fluid"
                  src={result.picture.thumbnail}
                />
              </td>
              <td>
                {result.name.first} {result.name.last}
              </td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{result.dob.date}</td>
            </tr>
          ) : result.name.last.toLowerCase().includes(props.search) ? (
            <tr className="table-row" key={index}>
              <td>
                <img
                  alt={result.name.first}
                  className="img-fluid"
                  src={result.picture.thumbnail}
                />
              </td>
              <td>
                {result.name.first} {result.name.last}
              </td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{result.dob.date}</td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
}

export default SearchResults;
