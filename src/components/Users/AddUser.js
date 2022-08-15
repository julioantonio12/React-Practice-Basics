import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const validValues = validateUserFields(enteredName, enteredAge);
    if (validValues) {
      props.onAddUser(enteredName, enteredAge);
      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else {
      console.log("ERROR");
    }
  };

  const closeHandler = () => {
    setError(null);
  };

  const validateUserFields = (enteredName, enteredAge) => {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Inválido",
        message: "Por favor ingresa un nombre y edad válidos.",
      });
      return false;
    } else if (+enteredAge <= 0) {
      setError({
        title: "Inválido",
        message: "Por favor ingresa una edad válida (> 0).",
      });
      return false;
    } else return true;
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
            ref={nameInputRef}
          />

          <label htmlFor="age">Edad</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Añadir usuario</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
