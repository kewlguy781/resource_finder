import React, { useState, useEffect } from "react";
// import { Form } from "react-bootstrap"; NEED TO CHANGE THIS
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button, Label } from "semantic-ui-react";
import useLocalState from "../customHooks/useLocalState.js";

const Search = () => {
    const [query, setQuery] = useLocalState("entryQuery", "")
    const [entry, setEntry] = useLocalState("entry", [])


const handleSubmit = (e) => {
    e.preventDefault();
    console.log('e :>> ', e);
    const params = { name: query };
    axios.get(`/api/search`, { params })
    .then ((res) => setEntry(res.data))
    .catch (console.log)
}

//render the result here
const renderEntry = () => entry.map((result) => (
    <p key={result.id}><Link as="h3" to={`/entries/${result.id}`}> {result.name} </Link> </p>
))

return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
       
          <input autoFocus 
          placeholder="Enter to search here"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}/>
          <Button type="submit">Search</Button>
        </Form.Field>
      </Form> 
      <br />
      { renderEntry() }
    </div>
  )
};

export default Search