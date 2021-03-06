import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/Form/FormContainer";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/userActions";
import {Loader} from "../components/Loader";
import {Message} from "../components/Message";
function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user_info } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { register_message } = userRegister;

  useEffect(() => {
    if (user_info) {
      if (user_info.verified === "Pending") {
        navigate("/editprofile");
      } else {
        navigate("/");
      }
    }
  }, [navigate, user_info]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <h1 className='mt-4'>Sign In</h1>
      {register_message && (
        <Message variant="warning">{register_message}</Message>
      )}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-grid gap-2 py-3">
          <Button type="submit" variant="primary">
            Sign In
          </Button>
          <Link to={"/passwordrest"}> Forgot password?</Link>
        </div>
      </Form>

      <Row className="py-3">
        <Col>
          New User?
          <Link to={"/register"}> Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
