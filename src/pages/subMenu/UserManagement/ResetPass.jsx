import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ResetPass = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      // Add code to submit the form data and create a new user
    },
  });

  return (
    <Container className="d-flex align-items-center h-100">
      <Row className="justify-content-center">
        <Col xs={12} md={14}>
          <h1 className="text-center text-primary">Reset Password</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                isInvalid={formik.errors.username && formik.touched.username}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                isInvalid={formik.errors.password && formik.touched.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group> <br/>

            <Button className="w-100 h-25 d-inline-block p-3" variant="primary" type="submit">
              Reset
            </Button>
          </Form>
</Col>
</Row>
</Container>
  )
};
  export default ResetPass;