import React from "react";
import Form from "react-bootstrap/Form";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Form.Control size="lg" type="text" placeholder="Large text" />
      <br />
      <Form.Control type="text" placeholder="Normal text" />
      <br />
      <Form.Control size="sm" type="text" placeholder="Small text" />
    </div>
  );
};

export default Home;
