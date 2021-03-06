import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/userActions";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";

function GouvernInfo() {
  const dispatch = useDispatch();
  const [gouvID, setGouvID] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        governmentID: gouvID,
      })
    );
  };
  return (
    <Form className="container" onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Gouverment ID</Form.Label>
        <Form.Control
          required
          placeholder="Gouverment ID"
          value={gouvID}
          onChange={(e) => setGouvID(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Row className="mb-3 justify-content-md-center">
        <div className="d-grid gap-2 py-3">
          <Button type="submit" variant="primary">
            Update
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default GouvernInfo;
