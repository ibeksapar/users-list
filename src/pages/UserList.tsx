import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { User, ApiUser } from "../types";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<ApiUser[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user: ApiUser) => ({
          id: user.id,
          firstName: user.name.split(" ")[0],
          lastName: user.name.split(" ")[1],
          email: user.email,
          skills: ["JavaScript", "React"],
          registrationDate: new Date().toLocaleDateString(),
        }));
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <Button component={Link} to="/add" variant="contained" color="primary">
        Add User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell>Registration Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.skills.join(", ")}</TableCell>
              <TableCell>{user.registrationDate}</TableCell>
              <TableCell>
                <Button
                  component={Link}
                  to={`/edit/${user.id}`}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
