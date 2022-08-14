import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const validValues = validateUserFields();
    if (validValues) {
      props.onAddUser(username, age);
      setUsername("");
      setAge("");
    } else {
      console.log("ERROR");
    }
  };

  const validateUserFields = () => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      return false;
    } else if (+age <= 0) {
      return false;
    } else return true;
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={username}
        />

        <label htmlFor="age">Edad</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Añadir usuario</Button>
      </form>
    </Card>
  );
};

export default AddUser;
