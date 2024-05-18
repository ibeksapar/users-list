import React from "react";
import { useParams } from "react-router-dom";

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Edit User {id}</h1>
    </div>
  );
};

export default EditUser;
