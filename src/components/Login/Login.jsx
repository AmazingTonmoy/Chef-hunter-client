import React, { useContext } from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsGithub, BsGoogle } from "react-icons/bs";

const Login = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const {
    user,
    signIn,
    googleLogIn,
    githubLogIn,
    auth,
    googleProvider,
    githubProvider,
    loading,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'

  //   email and pass login
  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    // handle login logic here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        form.reset();
        toast.success("Login Successful");
        navigate(from, {replace: true})
      })
      //   /............../
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError(
            `Email Address Not Found`
          );
        } else {
          setError("Wrong password.Try again");
        }
      });
  
  
//   ............
  
    };

  //   google log in

  const handleGoogleSignIn = () => {
    googleLogIn(auth, googleProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        toast.success("Login Successfull");
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log("error", error.message);
       
      });
  };

  //   handle github

  const handleGithubSignIn = () => {
    githubLogIn(auth, githubProvider)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        toast.success("Login Successfull");
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="container-full bg-secondary py-3 pb-5">
      <Container>
        <Row className="justify-content-lg-center">
          <Col
            md={6}
            className="border border-3 border-warring rounded py-4 bg-dark text-white"
          >
            <h2 className="text-center mb-3">Login</h2>
            <p className="text-danger fw-bold text-center mt-2">{error}</p>
            <p className="text-success text-center mt-2">{success}</p>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit"  className="mt-2">
                Login
              </Button>
              <p className="mt-4 text-center">
                Don't have an account yet?{" "}
                <Link className="text-primary" to="/register">
                  Sign Up
                </Link>
              </p>
              <p className="text-center">or</p>
            </Form>

            <Button
              onClick={handleGoogleSignIn}
              variant="danger"
              size="lg"
              className="d-block mb-2 mt-4 w-50 mx-auto"
            >
              <BsGoogle /> Continue With Google
            </Button>

            <Button
              onClick={handleGithubSignIn}
              variant="success"
              size="lg"
              className="d-block  mt-3 w-50 mx-auto"
            >
              <BsGithub /> Continue With Github
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
