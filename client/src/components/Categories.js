import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let res = await axios.get(`/api/categories/`);
      setCategories(res.date);
    } catch (err) {
      console.log(err.response);
      alert("Error: Did not sucsessfully render categories");
    }
  };

  const renderCategories = () => {
    return categories.map((c) => (
      <Card key={c.id}>
        <Card.Body>
          <Card.Title>{c.name}</Card.Title>
          <Card.Text>{c.description}</Card.Text>
          <Button>Check out businesess here</Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <>
      <div>Categories</div>
      <div>{renderCategories()}</div>
    </>
  );
};

export default Categories;

// create_table "categories", force: :cascade do |t|
//     t.string "cat_name"
//     t.string "cat_desc"
