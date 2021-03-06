import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import FormContainer from "./FormContainer";
import { updateUser } from "../../actions/userActions";

function DoctorInfo() {
  const dispatch = useDispatch();
  const [address1, setAdress1] = useState("");
  const [address2, setAdress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [licenceNumber, setLicenceNumber] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const provinces = [
    { lable: "Quebec", value: "QC" },
    { lable: "Ontario", value: "ON" },
    { lable: "Newfoundland and Labrador", value: "NL" },
    { lable: "Manitoba", value: "MB" },
    { lable: "Saskatchewan", value: "SK" },
    { lable: "Alberta", value: "AB" },
    { lable: "British Columbia", value: "BC" },
    { lable: "Yukon", value: "YT" },
    { lable: "Nunavut", value: "NU" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        address1,
        address2,
        city,
        province,
        licenceNumber,
        postalCode: postalcode,
      })
    );
  };
  return (
    <Form className="container" onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control
          required
          placeholder="Address 1"
          value={address1}
          onChange={(e) => setAdress1(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          required
          placeholder="Address 2"
          value={address2}
          onChange={(e) => setAdress2(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="postalcode">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            required
            placeholder="Postal Code"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <FloatingLabel controlId="floatingSelect" label="select province">
            <Form.Select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              aria-label="Floating label select example"
            >
              <option>select province</option>
              {provinces.map((prov) => (
                <option value={prov.value}>{prov.lable}</option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="LicenceNumber">
        <Form.Label>Licence number</Form.Label>
        <Form.Control
          required
          placeholder="Licence Number"
          value={licenceNumber}
          onChange={(e) => setLicenceNumber(e.target.value)}
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

export default DoctorInfo;
