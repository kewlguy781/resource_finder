import React, { useState, useEffect, useContext} from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  TextArea,
} from 'semantic-ui-react'
import { AuthContext } from "../providers/AuthProvider";
import axios from 'axios';

// const categories => () = [//options  = [
//   { key: 0, text: category.description, value: 0 },
//   { key: 1, text: 'Female', value: 1 },
//   { key: 2, text: 'Other', value: 2 },
//   { key: 3, text: 'Other', value: 3 },
//   { key: 4, text: 'Other', value: 4 },
// ]

const EntryForm = ({ addEntry  }) => {//pull correct props
  const auth = useContext(AuthContext);
  const [entryState, setEntryState] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    email: "",
    facebook: "",
    wed: "",
    phone: 0,
    desc: "",
    icon: "",
    img: "",
    lat_long: "",
    category_id: 0,//TODO COME BACK TO THIS ATT? 
    user_id: auth.user.id,
  });
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      let res = await axios.get("/api/categories/");
      console.log(res.data)
      setCategories(res.data);
    } catch (err) {
      alert("Error: Did not sucsessfully render categories");
    }
  };

  const renderCategories = () => {
    return categories.map((c) => (
      {text:c.cat_name, value:c.id}
    ));
  };

  const handleChange = (e) => {
    setEntryState({...entryState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    axios.post(`/api/categories/${entryState.category_id}/entries`, entryState)
    .then((res) => addEntry(res.data));
  };


  useEffect(() => {
    getCategories();
  }, []);
    
    return (
      <>
      <h1> Add a business or service that helps the deaf community</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
        <Form.Field
            control={Select}
            value={entryState.category_id}//COME BACK TO THIS
            label='category'
            options={renderCategories()}//render categories from useState axios calls
            placeholder='Category'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name='name'
            value={entryState.name}
            label='name'
            placeholder='Business/Service/Other'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.address}
            label='address'
            name='address'
            placeholder='Adress'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.city}
            label='city'
            name='city'
            placeholder='City'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.state}
            label='state'
            name='state'
            placeholder='State'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.email}
            label='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.facebook}
            label='facebook'
            name='facebook'
            placeholder='Facebook URL'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.wed}
            label='wed'
            name='wed'
            placeholder='Website URL'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            value={entryState.phone}
            label='phone'
            name='phone'
            placeholder='Phone Number'
            onChange={handleChange}
          />
          {/* <Form.Field
            control={Input}
            label='icon'
            placeholder=''
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label='img'
            placeholder='Uplad a picture'
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label='lat_long'
            placeholder='FOR MAP FUNCTION'
            onChange={handleChange}
          /> */}
        </Form.Group>
        <Form.Field
          control={TextArea}
          value={entryState.description}
          label='description'
          name='description'
          placeholder='Tell us about your entry'
          onChange={handleChange}
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </>
    );
};

export default EntryForm;
