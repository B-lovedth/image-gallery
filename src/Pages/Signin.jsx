import { useRef, useState } from "react";
import {
  Container,
  Banner,
  FormContainer,
} from "../Components/StyledComponents";
import banner from "../assets/banner.jpg";
import { useAuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Signin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value).then(
        (userCredential) => console.log(userCredential)
      );
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        setError("Wrong Password");
      } else if (errorCode === "auth/user-not-found") {
        setError("User Not Found");
      } else if (errorCode === "auth/invalid-email") {
        setError("Invalid Email");
      } else if (errorCode === "auth/network-request-failed") {
        setError("Network Error");
      } else if (errorCode === "auth/invalid-login-credentials") {
        setError("Invalid Login Credentials");
      } else {
        setError(error.message);
      }
      console.log(error, errorCode);
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <Container className="signin">
      <Banner>
        <img src={banner} alt="banner" />
      </Banner>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input type="email" ref={emailRef} placeholder="Email" required />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
          <button disabled={loading} type="submit">
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </FormContainer>
    </Container>
  );
};

export default Signin;
