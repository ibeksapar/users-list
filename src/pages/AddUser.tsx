import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "../types";

const AddUser: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<User>();
  const navigate = useNavigate();

  const onSubmit = (data: User) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", data)
      .then((response) => {
        console.log("User added:", response.data);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error adding the user!", error);
      });
  };

  return (
    <Container>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="First Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Last Name"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          )}
        />
        <Controller
          name="skills"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <TextField
              {...field}
              label="Skills (comma separated)"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default AddUser;
