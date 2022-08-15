import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

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

  const closeHandler = () => {
    setError(null);
  };

  const validateUserFields = () => {
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Inválido",
        message: "Por favor ingresa un nombre y edad válidos.",
      });
      return false;
    } else if (+age <= 0) {
      setError({
        title: "Inválido",
        message: "Por favor ingresa una edad válida (> 0).",
      });
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
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeHandler}
        />
      )}
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
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="submit">Añadir usuario</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
