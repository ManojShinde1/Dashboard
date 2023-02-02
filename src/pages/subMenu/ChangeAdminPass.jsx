import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ChangeAdminPass = () => {
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required('Old password is required'),
      newPassword: Yup.string().required('New password is required').min(8, 'Password must be at least 8 characters'),
      confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      // Add code to submit the form data and change the password
    },
  });

  return (
    <Container className="d-flex align-items-center h-100">
      <Row className="justify-content-center">
        <Col xs={12} md={14}>
          <h1 className="text-center text-primary">Change Password</h1>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="oldPassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="password"
                name="oldPassword"
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
                isInvalid={formik.errors.oldPassword && formik.touched.oldPassword}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.oldPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                isInvalid={formik.errors.newPassword && formik.touched.newPassword}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.newPassword}
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
            </Form.Group>
<br/>

            <Button className="w-100 h-25 d-inline-block p-3" variant="primary" type="submit">
              Submit
            </Button>
            </Form>
            </Col>
            </Row>
            </Container>
  )};

        export default ChangeAdminPass;
