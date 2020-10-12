import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EntryForm from "./EntryForm";

const Entries = ({ match }) => {
  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    try {
      let res = await Axios.get(`/api/categories/${match.params.id}/entries`);
      // /api/categories/0/entries <--- this is where you should call, 0 being category ID
      setEntries(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err)
      alert("Error: Could Not Load Entries");
    }
  };


  const renderEntries = () => {
    return entries.map((entry) => (
      <div class="ui card"  key={entry.id}>
      <div class="content">
      <div class="header">{entry.name}</div>
      </div>
      <div class="content"></div>
        <Card
        href= {entry.wed}
        meta= {entry.phone}
        description={`${entry.address} ${entry.city} ${entry.state}`}
      />
        <div class="extra content">
    <Link to={`/Entries/${entries.id}`} class="ui button" >View Businesses</Link>
  </div>
      
      </div>
    ));
  };

  useEffect(() => {
    getEntries();
  }, []);
  const addEntry = (entry) => {
    setEntries([...entries, entry])
  }

  return (
    <>
     <div>
      <h1>Deaf Community Supporting Businesses</h1>
      </div>
      {renderEntries()}
      <div>
        <EntryForm />
      </div>
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
