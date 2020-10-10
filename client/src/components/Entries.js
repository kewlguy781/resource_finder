import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const Entries = () => {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    try {
      let res = await Axios.get("/api/entries");
      setEntries(res.data);
    } catch (err) {
      console.log(err.response);
      alert("Error: Could Not Load Entries");
    }
  };

  renderEntries = () => {
    return entries.map((entry) => (
      <Card key={entry.id}>
        <Card.Header as="h1">{entry.name}</Card.Header>
        <Card.Description as="h2">
          {entry.address}
          {entry.city}
          {entry.state}
          {entry.email}
          {entry.facebook}
          {entry.wed}
          {entry.phone}
        </Card.Description>
      </Card>
    ));
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <>
      <div>Deaf Community Supporting Businesses</div>
      {renderEntries()}
    </>
  );
};
export default Entries;
// t.string "name"
// t.string "address"
// t.string "city"
// t.string "state"
// t.string "email"
// t.string "facebook"
// t.string "wed"
// t.integer "phone"
// t.text "desc"
// t.string "icon"
// t.string "img"
// t.string "lat_long"
