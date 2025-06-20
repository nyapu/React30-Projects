import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ type: '', message: '', visible: false });

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login condition
    if (email === 'admin@example.com' && password === 'admin') {
      setAlert({ type: 'success', message: 'Login successful!', visible: true });
    } else {
      setAlert({ type: 'danger', message: 'Invalid credentials', visible: true });
    }

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ ...alert, visible: false });
    }, 3000);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Login to Your Account</h2>

      {alert.visible && (
        <Alert color={alert.type} className="text-center">
          {alert.message}
        </Alert>
      )}

      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4 rounded bg-light">
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <Button color="primary" type="submit" block>
              Login
            </Button>

            <div className="text-center my-3">OR</div>

            <div className="d-flex flex-column gap-2">
              <Button color="danger" outline block>
                <i className="bi bi-google"></i> Login with Google
              </Button>
              <Button color="primary" outline block>
                <i className="bi bi-facebook"></i> Login with Facebook
              </Button>
              <Button color="dark" outline block>
                <i className="bi bi-github"></i> Login with GitHub
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
