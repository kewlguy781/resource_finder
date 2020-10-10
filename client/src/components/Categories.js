import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let res = await axios.get(`/api/categories/`);
      console.log(res.data);
      setCategories(res.data);
    } catch (err) {
      alert("Error: Did not sucsessfully render categories");
    }
  };

  const renderCategories = () => {
    return categories.map((c) => (
      <Card key={c.id}>
        <Card.Header>{c.cat_name}</Card.Header>
        <Card.Description>{c.cat_desc}</Card.Description>
        <Link to={`/categories/${c.id}`}>Check out businesess here</Link>
      </Card>
    ));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <div>{renderCategories()}</div>
    </>
  );
};

export default Categories;

// create_table "categories", force: :cascade do |t|
//     t.string "cat_name"
//     t.string "cat_desc"
