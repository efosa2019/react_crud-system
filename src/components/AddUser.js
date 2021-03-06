import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const myChangeHandler = e => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label> Name </Label>
        <Input
          type="text"
          value={name}
          onChange={myChangeHandler}
          name="name"
          placeholder="Enter user name"
          required
        ></Input>
      </FormGroup>
      <Button type="submit" className="btn btn-success ">
        Submit
      </Button>
      <Link to="/" className="btn btn-danger">
        Cancel
      </Link>
    </Form>
  );
};
